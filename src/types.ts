import type { HTTPError } from 'got';
import { SEARCH_OPERATORS, SEARCH_NESTED_OPERATORS } from 'utils/constants';

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

// #region Utility Types

/**
 * Only a single property of the given type is allowed:
 * { one: string; two: number } -> { one: string; two?: undefined } | { two: number; one?: undefined }
 */
type SinglePropertyAllowedIn<T extends { [key: string]: any }> = Expand<
  {
    [P in keyof T]: { [Q in keyof Omit<T, P>]+?: never } &
      { [Q in P]: NonNullable<T[P]> | NonNullable<T[P]>[] };
  }[keyof T]
>;

// #endregion

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
  readonly type: 'list';
  data: T[];
};

export type IntercomPagesCursor = {
  readonly type: 'pages';
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

// #region Segments

/**
 * A segment is a group of your contacts defined by rules that you set. Contacts are
 * automatically added to the segment every time the contact updates to match those rules.
 * You can use Search for contacts to find contacts that match the same rules.
 *
 * @docs - [Segment](https://developers.intercom.com/intercom-api-reference/reference#segment-model)
 */
export type Segment = {
  readonly type: 'segment';
  /** The unique id representing the segment. */
  id: string;
  /** The name of the segment. */
  name: string;
  /**
   * The time specified for when the segment was created
   * as a UNIX timestamp.
   *
   * @example
   *  1593220312
   */
  created_at: number;
  /**
   * The time specified for when the segment was updated last
   * as a UNIX timestamp.
   *
   * @example
   *  1593220312
   */
  updated_at: number;
  /**
   * Type of the record: `user` or `lead.`
   */
  person_type: Contact['role'];
  /**
   * The number of items in the user segment. It's returned when `include_count=true` is included in the request.
   * */
  count?: number;
};

// #endregion

// #region Contacts

export type SocialProfile = {
  readonly type: 'social_profile';
  /** The name of the service (ie. Twitter, Facebook, etc) */
  name: string;
  /** The profile page for the contact on the service */
  url: string;
};

export type Location = {
  readonly type: 'location';
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
  readonly type: 'list';
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

// eslint-disable-next-line @typescript-eslint/ban-types
export type EmptyObj = {};

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
  readonly type: 'contact';
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
  android_device: null | string;
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

// #region Search

/**
 * This is a special convention to keep type safety that we allow.  When searching you may
 * provide an object instead of value which is
 * { custom_attributes: { [ONE KEY OF Contact['custom_attributes']] : ValueOfAttribute } }
 */
type SearchableAttributes<ATTR extends AnyObj> = SinglePropertyAllowedIn<ATTR>;

export type CustomAttributeQueryFormatted<
  ATTR extends AnyObj,
  F extends keyof ATTR
> = {
  field: string;
  operator: SearchPropertyOperators;
  value: ATTR[F] | ATTR[F][];
};

type SearchableContactFields =
  | 'id'
  | 'name'
  | 'role'
  | 'avatar'
  | 'owner_id'
  | 'email'
  | 'phone'
  | 'external_id'
  | 'created_at'
  | 'signed_up_at'
  | 'updated_at'
  | 'last_seen_at'
  | 'last_contacted_at'
  | 'last_replied_at'
  | 'last_email_opened_at'
  | 'last_email_clicked_at'
  | 'language_override'
  | 'browser'
  | 'browser_language'
  | 'os'
  | 'unsubscribed_from_emails'
  | 'marked_email_as_spam'
  | 'has_hard_bounced'
  | 'ios_last_seen_at'
  | 'ios_app_version'
  | 'ios_device'
  | 'ios_os_version'
  | 'ios_sdk_version'
  | 'android_last_seen_at'
  | 'android_app_version'
  | 'android_device'
  | 'android_app_name'
  | 'android_sdk_version';

// type $QueryError<E, F, OP> = {
//   field: F;
//   operator: OP;
//   value: E;
// };

type SearchableContactRaw<ATTR extends AnyObj, F = any> = Pick<
  Contact,
  SearchableContactFields
> & {
  custom_attributes: SearchableAttributes<ATTR>;
  tag_id: Tag['id'];
  segment_id: Segment['id'];
  'location.country': Contact['location']['country'];
  'location.region': Contact['location']['region'];
  'location.city': Contact['location']['city'];
  '<-- INVALID_VALUE_FOR_FIELD': { __EXPECTED: F };
};

type SearchableContact<
  ATTR extends AnyObj,
  F extends SearchableFields | unknown = unknown,
  O = NonNullable<SearchableContactRaw<ATTR, F>>
> = O extends infer OBJ
  ? {
      [K in keyof OBJ]: O[K];
    }
  : never;

export type SearchPropertyQuery<
  F extends SearchableFields,
  ATTR extends AnyObj = EmptyObj
> = F extends any
  ? {
      field: F;
      operator: SearchPropertyOperators;
      value: SearchableContact<ATTR>[F];
    }
  : never;

export type SearchNestedQuery<
  ATTR extends AnyObj = EmptyObj,
  F extends SearchableFields = SearchableFields,
  OP extends NestedSearchOperators = NestedSearchOperators
> = {
  operator: OP;
  value:
    | Array<SearchNestedQuery<ATTR, F>>
    | Array<SearchPropertyQuery<F, ATTR>>;
};

export type SearchContactsQuery<
  ATTR extends AnyObj = EmptyObj,
  F extends SearchableFields = SearchableFields
> = {
  query: SearchPropertyQuery<F, ATTR> | SearchNestedQuery<ATTR, F>;
  sort?: SearchSort;
  pagination?: SearchPagination;
};

/**
 * The fields that can be used to search for contacts.
 */
export type SearchableFields = keyof SearchableContactRaw<EmptyObj>;

/**
 * Accepted search operators to create nested search queries
 *
 * @docs - [Accepted Operators](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-operators)
 */
export type NestedSearchOperators = typeof SEARCH_NESTED_OPERATORS[number];

/**
 * Accepted search operators for search queries.
 *
 * @docs - [Accepted Operators](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-operators)
 */
export type SearchPropertyOperators = typeof SEARCH_OPERATORS[number];

/**
 * Accepted search operators for both queries and nested queries.
 *
 * @docs - [Accepted Operators](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-operators)
 */
export type SearchOperators = NestedSearchOperators | SearchPropertyOperators;

export type SearchSort = {
  /**
   * Any searchable attribute (available on the Simple Query “Allowed fields“).
   *
   * @docs - [Searchable Fields](https://developers.intercom.com/intercom-api-reference/reference#section-accepted-fields)
   */
  field: SearchableFields;
  /** Either “ascending” or “descending” - default to “descending” if none is provided. */
  order?: 'ascending' | 'decending';
};

export type SearchPagination = {
  per_page?: number;
  starting_after?: string;
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
