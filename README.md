# intercomly

A Typescript API for Intercom API v2.0 - Unfinished

- [Intercom API Documentation](https://developers.intercom.com/intercom-api-reference/reference)

```typescript
import IntercomlyClient from 'intercomly';

const client = new IntercomlyClient({
  token: process.env.INTERCOM_TOKEN,
});
```

```typescript
for await (const contacts of client.getContactsByEmailPaginated('test@example.com')) {
  // paginated results
}
// or raw result
await client.getContactsByEmail(email)

// or by external_id
await client.getContactByExternalId(externalId);

// or by intercom internal id and provide custom attributes shape expected
await client.getContact<{ customAttribute: string }>(contactId);
```

```typescript
await client.upsertContactByExternalId({
  role: 'user',
  external_id: 'unique_id',
});
```

```typescript
await client.upsertTag('Tag Name')
```
