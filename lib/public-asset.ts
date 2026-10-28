/** Project-site base path (e.g. GitHub Pages); empty when served from domain root. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a path under `public/` for img/src and CSS url(). */
export function publicAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
