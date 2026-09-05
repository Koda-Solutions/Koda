/**
 * The six storefront themes: three light, three dark.
 *
 * One source of truth, shared by the landing page previews, the onboarding theme
 * picker and, from Phase 5, the real storefront renderer. A colour never drifts
 * between what we sell and what a merchant actually gets.
 *
 * `key` matches `stores.theme_key` in the database, so these strings are a contract
 * with the backend, not display labels.
 */
export interface ThemePalette {
  key: string;
  mode: 'light' | 'dark';
  /** Page background. */
  bg: string;
  /** Cards and bars sitting on the background. */
  surface: string;
  ink: string;
  muted: string;
  line: string;
  /** Buttons and active states. */
  accent: string;
  /** Text placed on the accent. */
  onAccent: string;
  /** A quieter second accent, for sale badges and highlights. */
  highlight: string;
  /** Stand-ins for merchant product photography. */
  tiles: [string, string, string, string];
}

/**
 * The only theme a Free store may use. Mirrors EntitlementService.FREE_THEME in
 * koda-store-backend: the server rejects anything else, so the picker must not
 * offer it as if it were selectable.
 */
export const FREE_THEME = 'nour';

export const themePalettes: ThemePalette[] = [
  {
    key: 'nour',
    mode: 'light',
    bg: '#F7F3EA',
    surface: '#FFFDF7',
    ink: '#2A2A20',
    muted: '#7D7866',
    line: '#E5DFD0',
    accent: '#4A5D3A',
    onAccent: '#F7F3EA',
    highlight: '#B0703C',
    tiles: ['#C9A9A0', '#A9BDB2', '#D6C7A5', '#B5A48F'],
  },
  {
    key: 'moj',
    mode: 'light',
    bg: '#F1F5FA',
    surface: '#FFFFFF',
    ink: '#10233A',
    muted: '#5F7691',
    line: '#D8E3EE',
    accent: '#1B6FE0',
    onAccent: '#FFFFFF',
    highlight: '#E0542F',
    tiles: ['#9DBBDD', '#BBD2E8', '#89A7C9', '#C9DCEC'],
  },
  {
    key: 'ward',
    mode: 'light',
    bg: '#FBF3F4',
    surface: '#FFFFFF',
    ink: '#33202A',
    muted: '#8A6E78',
    line: '#EEDCE1',
    accent: '#7A2E4E',
    onAccent: '#FBF3F4',
    highlight: '#C08A6B',
    tiles: ['#DFB8C0', '#E8CFD4', '#CBA0AC', '#F0DCD6'],
  },
  {
    key: 'layl',
    mode: 'dark',
    bg: '#17150F',
    surface: '#221F17',
    ink: '#F3EBD9',
    muted: '#9A907C',
    line: '#332E22',
    accent: '#D4AF57',
    onAccent: '#17150F',
    highlight: '#8C7BA6',
    tiles: ['#4B463A', '#5A5344', '#3A362C', '#6B6252'],
  },
  {
    key: 'faham',
    mode: 'dark',
    bg: '#141414',
    surface: '#1E1E1E',
    ink: '#F0F0EC',
    muted: '#8E8E88',
    line: '#2C2C2C',
    accent: '#C6F24E',
    onAccent: '#141414',
    highlight: '#FF6B4A',
    tiles: ['#4A4A47', '#5C5C58', '#403F3C', '#535350'],
  },
  {
    key: 'nil',
    mode: 'dark',
    bg: '#0C1E24',
    surface: '#132C34',
    ink: '#E4F2F2',
    muted: '#7FA0A6',
    line: '#1E3D46',
    accent: '#4FD1C5',
    onAccent: '#0C1E24',
    highlight: '#E8B04B',
    tiles: ['#22505A', '#2C6570', '#1B424B', '#357A85'],
  },
];

/** Kept as a named export so older imports keep working. */
export const themePreviews = themePalettes;
