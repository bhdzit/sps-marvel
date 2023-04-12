
import 'dotenv/config';
import crypto  from 'crypto';
const ts = parseInt(Date.now() / 1000, 10);

const params = {
  apikey: process.env.PUBLIC_KEY,
  hash: createHash(),
  ts: ts,
  limit: 100
}

function createHash() {
  var preHash = ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    , hash    = crypto.createHash('md5').update(preHash).digest('hex');

  return hash;
};

export const config=params; 


