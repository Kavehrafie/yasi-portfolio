import {trim} from "@/utils/utils";
import {SITE} from "@/utils/config";

export const BASE_SITE_PATHNAME = SITE.base

export const trimSlash = (s: string) => trim(trim(s, '/'));
export const getAsset = (path: string): string =>
    '/' +
    [BASE_SITE_PATHNAME, path]
        .map((el) => trimSlash(el))
        .filter((el) => !!el)
        .join('/');

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == 'never' && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == 'always' && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};