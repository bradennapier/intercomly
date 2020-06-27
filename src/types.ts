import type { HTTPError } from 'got';

export type ClientOptions = {
  /**
   * The Intercom token for the account.
   * @required
   */
  token: string;
  /**
   * Use a keepalive agent for requests?  This defaults to `true` and utilizes
   * the [`agentkeepalive`](https://github.com/node-modules/agentkeepalive) package.
   *
   * @default true
   */
  keepalive?: boolean;
};

// #region Intercom Errors

export type IntercomErrorCodes =
  | 'server_error'
  | 'client_error'
  | 'type_mismatch'
  | 'parameter_not_found'
  | 'parameter_invalid'
  | 'action_forbidden'
  | 'conflict'
  | 'api_plan_restricted'
  | 'rate_limit_exceeded'
  | 'unsupported'
  | 'token_revoked'
  | 'token_blocked'
  | 'token_not_found'
  | 'token_unauthorized'
  | 'token_expired'
  | 'missing_authorization'
  | 'retry_after'
  | 'job_closed'
  | 'not_restorable'
  | 'team_not_found'
  | 'team_unavailable'
  | 'admin_not_found';

export type IntercomErrorList = {
  type: 'error.list';
  request_id: string;
  errors: Array<{
    /**
     * A string indicating the kind of error, used to further qualify the HTTP response code
     */
    code: IntercomErrorCodes;
    /**
     * Human readable description of the error
     */
    message: string;
    /**
     * Used to identify a particular field or query parameter that was in error.
     */
    field?: string;
  }>;
};

export type RequestError = HTTPError & {
  type: 'error.list' | 'error';
  result: 'error';
  statusCode: number;
  requestId?: IntercomErrorList['request_id'];
  errors?: IntercomErrorList['errors'];
  originalMessage: string;
};

// #endregion

// #region Intercom Responses

export type IntercomList<T> = {
  type: 'list';
  data: T[];
};

export type IntercomPagesCursor = {
  type: 'pages';
  next: {
    page: number;
    starting_after: string;
  };
  page: number;
  per_page: number;
  total_pages: number;
};

export type IntercomCursorPaginatedList<T> = IntercomList<T> & {
  total_count: number;
  pages: IntercomPagesCursor;
};

// #endregion

// #region Contacts

export type SocialProfile = {
  type: 'social_profile';
  /** The name of the service (ie. Twitter, Facebook, etc) */
  name: string;
  /** The profile page for the contact on the service */
  url: string;
};

export type Location = {
  type: 'location';
  country: null | string;
  region: null | string;
  city: null | string;
};

type AddressableObject<T extends 'company' | 'note' | 'tag'> = {
  /** The type of object - company, note, tag. */
  type: T;
  /** The id of the object. */
  id: string;
  /** The URL where the object in question can be accessed (ie. /companies/45678). */
  url: string;
};

type AddressableList<T extends 'company' | 'note' | 'tag'> = {
  type: 'list';
  /** An array of Addressable Objects (Maximum of 10). */
  data: Array<AddressableObject<T>>;
  /** The URL where the full list can be accessed (ie. /contacts/1234/companies). */
  url: string;
  /** The total amount of records. */
  total_count: number;
  /** Whether there's more Addressable Objects to be viewed. If true, use the url to view all. */
  has_more: boolean;
};

export type AnyObj = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type ContactCreate<
  R extends Contact['role'],
  ATTR extends AnyObj = AnyObj
> = {
  /** The role of the contact - `user` or `lead`.  */
  role: R;
  /**
   * The custom attributes which are set for the contact
   *
   * @note
   *   The data attributes must have already been created either via the API
   *   or within the UI.
   */
  custom_attributes?: ATTR;
  /** The contacts phone number */
  phone?: string;
  /** The contacts name */
  name?: string;
  /** An image URL containing the avatar of a contact. */
  avatar?: string;
  /**
   * The time specified for when a contact signed up as
   * a UNIX timestamp.
   *
   * @example
   *  1593220312
   */
  signed_up_at?: number;
  /**
   * The time when the contact was last seen (either where the
   * Intercom Messenger was installed or when specified manually)
   *
   * @example
   *  1593220312
   */
  last_seen_at?: number;
  /** The id of an admin that has been assigned account ownership of the contact */
  owner_id?: number;
  /** Whether the contact is unsubscribed from emails */
  unsubscribed_from_emails?: boolean;
} & (R extends 'user'
  ?
      | {
          /** A unique identifier for the contact which is given to Intercom */
          external_id: string;
          /** The contacts email */
          email?: string;
        }
      | {
          email: string;
          external_id?: string;
        }
  : {
      /** A unique identifier for the contact which is given to Intercom */
      external_id?: string;
      /** The contacts email */
      email?: string;
    });

export type ContactCreateUser<ATTR extends AnyObj = AnyObj> = ContactCreate<
  'user',
  ATTR
>;

export type ContactCreateLead<ATTR extends AnyObj = AnyObj> = ContactCreate<
  'lead',
  ATTR
>;

export type Contact<
  ATTR extends AnyObj = AnyObj,
  R extends 'user' | 'lead' = 'user' | 'lead'
> = {
  /** The type of object */
  type: 'contact';
  /** The unique identifier for the contact which is given by Intercom.  */
  id: string;
  /** The id of the workspace which the contact belongs to. */
  workspace_id: string;
  /** A unique identifier for the contact which is given to Intercom. */
  external_id: string;
  /** The role of the contact - `user` or `lead`.  */
  role: R;
  /** The contact's email */
  email: string;
  /** The contact's phone number */
  phone: null | string;
  /** The contact's name */
  name: string;
  /** An image URL containing the avatar of a contact. */
  avatar: null | string;
  /** The id of an admin that has been assigned account ownership of the contact */
  owner_id: null | number;
  /** A list of social profiles associated to the contact */
  social_profiles: IntercomList<SocialProfile>;
  /** Whether the contact has had an email sent to them hard bounce.  */
  has_hard_bounced: boolean;
  /** Whether the contact has marked an email sent to them as spam. */
  marked_email_as_spam: boolean;
  /** Whether the contact is unsubscribed from emails. */
  unsubscribed_from_emails: boolean;
  /**
   * A preferred language setting for the contact, used by the
   * Intercom Messenger even if their browser settings change.
   */
  language_override: null | string;
  /** The name of the browser which the contact is using. */
  browser: null | string;
  /** The version of the browser which the contact is using. */
  browser_version: null | string;
  /** The language set by the browser which the contact is using. */
  browser_language: null | string;
  /** The operating system which the contact is using. */
  os: null | string;
  /** An object showing location details of the contact. */
  location: Location;
  /** The custom attributes which are set for the contact. */
  custom_attributes: ATTR;
  /** The tags which have been added to the contact. */
  tags: AddressableList<'tag'>;
  /** The notes which have been added to the contact. */
  notes: AddressableList<'note'>;
  /** The companies which the contact belongs to. */
  companies: AddressableList<'company'>;
  /** The name of the Android app which the contact is using. */
  android_app_name: null | string;
  /** The version of the Android app which the contact is using. */
  android_app_version: null | string;
  /** The version of the Android OS which the contact is using. */
  android_os_version: null | string;
  /** The version of the Android SDK which the contact is using. */
  android_sdk_version: null | string;
  /**
   * The last time the contact used the Android app.
   *
   * @example
   *  1593220312
   */
  android_last_seen_at: null | number;
  /** The name of the iOS app which the contact is using. */
  ios_app_name: null | string;
  /** The version of the iOS app which the contact is using. */
  ios_app_version: null | string;
  /** The iOS device which the contact is using. */
  ios_device: null | string;
  /** The version of iOS which the contact is using. */
  ios_os_version: null | string;
  /** The version of the iOS SDK which the contact is using. */
  ios_sdk_version: null | string;
  /**
   * The last time the contact used the iOS app.
   *
   * @example
   *  1593220312
   */
  ios_last_seen_at: null | number;
  /**
   * The time when the contact was created.
   *
   * @example
   *  1593220312
   */
  created_at: number;
  /**
   * The time when the contact was updated.
   *
   * @example
   *  1593220312
   */
  updated_at: number;
  /**
   * The time specified for when a contact signed up.
   *
   * @example
   *  1593220312
   */
  signed_up_at: number;
  /**
   * The time when the contact was last seen (either where
   * the Intercom Messenger was installed or when specified manually).
   *
   * @example
   *  1593220312
   */
  last_seen_at: number;
  /**
   * The time when the contact last messaged in.
   *
   * @example
   *  1593220312
   */
  last_replied_at: null | number;
  /**
   * The time when the contact was last messaged.
   *
   * @example
   *  1593220312
   */
  last_contacted_at: null | number;
  /**
   * The time when the contact last opened an email.
   *
   * @example
   *  1593220312
   */
  last_email_opened_at: null | number;
  /**
   * The time when the contact last clicked a link in an email.
   *
   * @example
   *  1593220312
   */
  last_email_clicked_at: null | number;
};

// #endregion

// #region DataAttributes

/**
 * Data Attributes are a type of metadata used to describe your contact and company models.
 * These include standard and custom attributes. By using the data attributes endpoint, you
 * can get the global list of attributes for your workspace, as well as create and archive
 * custom attributes.
 *
 * @see https://developers.intercom.com/intercom-api-reference/reference#data-attribute-model
 */
export type DataAttribute = {
  /** static value data_attribute */
  type: 'data_attribute';
  /**
   * Value is contact for user/lead attributes, and company for company attributes.
   */
  model: 'contact' | 'company';
  /**
   * Name of the attribute
   *
   * @examples
   *  `email`
   *  `region_name`
   *  `image_url`
   *  `paid_subscriber`
   */
  name: string;
  /**
   * Full name of the attribute. Should match the name unless it’s a nested attribute.
   *
   * @tip
   *  We can split full_name on . to access nested user object values.
   *
   * @examples
   *  `email`
   *  `location_data.region_name`
   *  `avatar.image_url`
   *  `custom_attributes.paid_subscriber`
   *
   */
  full_name: string;
  /**
   * Readable name of the attribute (i.e. name you see in the UI)
   */
  label: 'paid_subscriber';
  /**
   * Readable description of the attribute
   */
  description: '';
  /**
   * Type of data stored in the attribute.
   */
  data_type: 'string' | 'integer' | 'float' | 'boolean' | 'date';
  /**
   * List of predefined options for the attribute value.
   */
  options?: string[];
  /**
   * Can this attribute be updated through API.
   */
  api_writable: boolean;
  /**
   * Can this attribute be updated in the UI.
   */
  ui_writable: boolean;
  /**
   * True if this is a custom data attribute.
   */
  custom: boolean;
  /**
   * If this is a custom data attribute and it has been archived this will be true.
   */
  archived: false;
  /**
   * The id of the team member who created the data attribute if this is a cutom data attribute.
   */
  admin_id?: string;
  /**
   * The timestamp the attribute was created if it is a custom data attribute
   *
   * @example
   *  1392734388
   */
  created_at?: number;
  /**
   * The timestamp the attribute was updated if it is a custom data attribute
   *
   * @example
   *  1392734388
   */
  updated_at?: number;
};

// #endregion

// #region Tags

export type Tag = {
  type: 'tag';
  id: string;
  name: string;
};

// #endregion

// #region Debugging

/**
 * Can be used to expand types while debugging such that when you encounter a type
 * like `DataAttribute`, you can use `Expand<DataAttribute>` to see the resolved type.
 *
 * @tip
 *  If results are being cut off you can set "noErrorTruncation" in your tsconfig.json,
 *  although this is a deprecated option so should be used for debugging only.
 *
 * @example
 *  const results = await client.getDataAttributes()
 *  type Check = Expand<typeof result>;
 *  // Resolves to the following instead of DataAttribute[]:
 *  {
 *     type: "data_attribute";
 *     model: "contact" | "company";
 *     name: string;
 *     full_name: string;
 *     label: "paid_subscriber";
 *     description: "";
 *     data_type: "string" | "boolean" | "integer" | "float" | "date";
 *     options?: string[] | undefined;
 *     api_writable: boolean;
 *     ui_writable: boolean;
 *     custom: boolean;
 *     archived: false;
 *     admin_id?: string | undefined;
 *     created_at?: number | undefined;
 *     updated_at?: number | undefined;
 *  }[]
 */
export type Expand<T> = T extends infer O
  ? {
      [K in keyof O]: O[K] extends { [key: string]: unknown }
        ? Expand<O[K]>
        : O[K];
    }
  : never;

// #endregion
