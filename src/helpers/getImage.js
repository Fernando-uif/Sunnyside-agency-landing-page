export function getImageUrl(url) {
  return new URL(`../assets/${url}`, import.meta.url).href;

}
