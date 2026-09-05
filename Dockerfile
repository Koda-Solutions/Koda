# Build and run the Koda frontend.
#
# Three stages so the shipped image carries a Node runtime and the standalone
# server, not a full node_modules tree and a build toolchain.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# npm ci, not npm install: it installs exactly the lockfile and fails if the
# two have drifted, which is the difference between a reproducible build and a
# build that quietly picked up a new minor version.
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* values are inlined into the client bundle at build time, so they
# are build arguments rather than runtime environment. Changing one means a
# rebuild, which is why they are passed by CI from Terraform's outputs.
ARG NEXT_PUBLIC_IDENTITY_URL
ARG NEXT_PUBLIC_STORE_URL
ARG NEXT_PUBLIC_API_FALLBACK
ENV NEXT_PUBLIC_IDENTITY_URL=$NEXT_PUBLIC_IDENTITY_URL \
    NEXT_PUBLIC_STORE_URL=$NEXT_PUBLIC_STORE_URL \
    NEXT_PUBLIC_API_FALLBACK=$NEXT_PUBLIC_API_FALLBACK \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
# HOSTNAME=0.0.0.0 is load bearing. Next's standalone server binds to $HOSTNAME,
# which inside a container defaults to the container id, so it listens on the
# bridge address only. Caddy still reaches it over the Docker network, but the
# container's own healthcheck hits localhost and gets connection refused, so the
# container reports unhealthy forever and every deploy fails its health gate.
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0

RUN apk add --no-cache curl \
 && addgroup --system --gid 1001 koda \
 && adduser --system --uid 1001 --ingroup koda koda

# The standalone output already contains the trimmed node_modules it needs.
COPY --from=build --chown=koda:koda /app/.next/standalone ./
COPY --from=build --chown=koda:koda /app/.next/static ./.next/static
COPY --from=build --chown=koda:koda /app/public ./public

USER koda
EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=20s --retries=5 \
  CMD ["sh", "-c", "curl -fsS http://localhost:3000/ >/dev/null"]

CMD ["node", "server.js"]
