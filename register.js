/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

// This is the same as ts-node/register except it sets the environment
// variable so that it uses the ttypescript compiler.  This variable
// could just be set in scripts but this convention makes it simpler.
process.env.TS_NODE_COMPILER = 'ttypescript';

require('ts-node').register();
