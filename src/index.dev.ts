/**
 * It is often useful to quickly run ts code within the repo to test single functionality imported directly.  Rename this to `quick.ts` which will not be included
 * within the repo in case sensitive information is statically tested.  Then simply run `yarn test:quick` to run the file using `ts-node`
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';

import { takeAsync } from 'utils/combinators';
import { IntercomlyClient } from './client';

// const externalId = '2e6baf40-b813-11ea-b73a-a17536b60e01';
const email = 'test1@example.com';

async function run() {
  try {
    const client = new IntercomlyClient({
      token: process.env.INTERCOM_TOKEN,
    });
    console.log('Client: ', client);

    // const gen = client.getContactsPaginated<{ kycTier: string }>(1);
    // const contact = await client.getContactByExternalId(externalId);
    // const contact = await client.getContactsByEmail(email);
    // console.log(contact);
    // const result = await client.upsertTag('Testing');
    // const result = await client.getContacts();
    const gen = client.getContactsByEmailPaginated(email);

    await client.upsertContactByExternalId({
      role: 'user',
      // email: 'hi',
      external_id: 'string',
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const result of takeAsync(2, gen)) {
      // console.log('Result! ', result);
      console.log('Next!');
    }

    console.log('done');
  } catch (err) {
    console.error('Error: ', err, err.message);
  }
}

run();
