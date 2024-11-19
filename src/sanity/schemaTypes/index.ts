import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import drinks from './drinks'
import Title from './Title'
import image from './image'
import Link from './Link'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Title,food,drinks,image,Link],
}
