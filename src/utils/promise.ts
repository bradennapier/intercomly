import util from 'util';

export const sleep = util.promisify(setTimeout);
