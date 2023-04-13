import { Client } from 'redis-om'

/* pulls the Redis URL from .env */
//const url = process.env.REDIS_URL

/* create and open the Redis OM Client */
const client = await new Client().open("redis://10.5.0.1:6379")

export default client