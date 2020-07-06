import type { ClientOptions } from 'types';

/**
 * The released version, this will be updated by semantic-release during the release
 * phase.
 */
export const VERSION = '__VERSION__';

export const DEFAULT_OPTIONS: Omit<ClientOptions, 'token'> = {
  keepalive: true,
};

export const SEARCH_NESTED_OPERATORS = ['AND', 'OR'] as const;

export const SEARCH_OPERATORS = [
  /** Equals (case sensitive) */
  '=',
  /** Doesn't equal (case sensitive) */
  '!=',
  /**
   * In (Shortcut for `OR !` queries)
   * Values must be in Array
   */
  'IN',
  /**
   * Not In (Shortcut for `OR` queries)
   * Values must be in Array
   */
  'NIN',
  /** Greater (or equal) than */
  '>',
  /** Lower (or equal) than */
  '<',
  /** Contains */
  '~',
  /** Doesn't contain */
  '!~',
  /** Starts With */
  '^',
  /** Ends With */
  '$',
] as const;
