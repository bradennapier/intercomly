import type { ClientOptions } from 'types';

/**
 * The released version, this will be updated by semantic-release during the release
 * phase.
 */
export const VERSION = '__VERSION__';

export const DEFAULT_OPTIONS: Omit<ClientOptions, 'token'> = {
  keepalive: true,
};
