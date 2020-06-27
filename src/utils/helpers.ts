import { URLSearchParams } from 'url';
import crypto from 'crypto';

/**
 * Create the hash required for identify verification
 *
 * @docs [Intercom Identity Verification](https://www.intercom.com/help/en/articles/183-enable-identity-verification-for-web-and-mobile)
 */
export function createIntercomUserHash(id: string, secret: string): string {
  const hash = crypto.createHmac('sha256', secret).update(id);
  return hash.digest('hex');
}

/**
 * Helper to get URLSearchParams from a request in a way that got will not complain.
 */
export function getSearchParams(
  params: undefined | string | { [key: string]: any } | URLSearchParams,
): undefined | URLSearchParams {
  if (!params) {
    return;
  }

  return new URLSearchParams(params);
}
