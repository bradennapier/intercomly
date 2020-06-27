/**
 * Strips a leading / if included such that
 * `/example` -> `example`
 */
export function stripLeadingSlash(str: string): string {
  if (str[0] === '/') return str.substr(1);
  return str;
}
