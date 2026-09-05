/**
 * The colour maths the previews share.
 *
 * Pulled out of ProductImage when the theme cards gained a live accent picker and
 * needed the same luminance test. Two copies of a contrast rule is how one of them
 * quietly stops matching the other.
 */

/** #rrggbb -> [r, g, b]. */
export function parse(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

export function toHex([r, g, b]: [number, number, number]): string {
  return (
    '#' +
    [r, g, b]
      .map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0'))
      .join('')
  );
}

/**
 * Perceived brightness, 0 to 255. The green weighting is not arbitrary: the eye is
 * far more sensitive to it than to red or blue, so a pure blue and a pure yellow of
 * the same RGB magnitude are nothing like the same brightness.
 */
export function luminance(hex: string): number {
  const [r, g, b] = parse(hex);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

export function mix(a: string, b: string, t: number): string {
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  return toHex([ar + (br - ar) * t, ag + (bg - ag) * t, ab + (bb - ab) * t]);
}

/**
 * Picks whichever of two candidates reads better on `background`.
 *
 * Used to derive the text colour for a merchant-chosen accent. Both candidates come
 * from the theme's own palette rather than being black and white, so a swapped accent
 * still looks like it belongs to the theme instead of borrowing a browser default.
 */
export function readableOn(background: string, a: string, b: string): string {
  const bg = luminance(background);
  return Math.abs(luminance(a) - bg) >= Math.abs(luminance(b) - bg) ? a : b;
}
