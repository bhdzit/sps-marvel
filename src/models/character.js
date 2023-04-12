import { Entity, Schema } from 'redis-om'
import client from '../config/redisClient.js'


/* our entity */
class Character extends Entity { }

/* create a Schema for character */
const characterSchema = new Schema(Character, {
  id: { type: 'number' },
  name: { type: 'string' },
  description: { type: 'string' },
  modified: { type: 'date' },
})

/* use the client to create a Repository just for Characters */
export const characterRepository = client.fetchRepository(characterSchema)

/* create the index for Character */
await characterRepository.createIndex();
