import applyMixins from 'utils/applyMixins';
import { DEFAULT_OPTIONS } from 'utils/constants';
import { createIntercomUserHash } from 'utils/helpers';

import Request from 'utils/request';
import type { ClientOptions } from './types';

import {
  IntercomDataAttributes,
  IntercomContacts,
  IntercomTags,
} from './endpoints';

class IntercomlyClient {
  request: Request;

  static createIntercomUserHash = createIntercomUserHash;

  constructor(_options: ClientOptions) {
    if (!_options.token) {
      throw new TypeError(
        '[ERROR] | intercomly | An intercom token is required when creating the IntercomlyClient',
      );
    }

    const options: ClientOptions = { ...DEFAULT_OPTIONS, ..._options };

    this.request = new Request(options);
  }
}

applyMixins(IntercomlyClient, [
  IntercomDataAttributes,
  IntercomContacts,
  IntercomTags,
]);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IntercomlyClient
  extends IntercomDataAttributes,
    IntercomContacts,
    IntercomTags {}

export { IntercomlyClient };
