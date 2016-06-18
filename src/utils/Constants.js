import { shuffle } from '../utils/helpers'
/*
  "What is a type, then? A type is a string (or a symbol) uniquely identifying a whole class of items in your application."
*/
export const ItemTypes = {
  LOGO: 'logo'
}

export const path = '../../res/logos/'
const Names = [
  'React',
  'Flux',
  'Redux',
  'Nuclide',
  'Webpack',
  'Relay',
  'ESLint',
  'ReduxObservable',
  'Babel',
  'GraphQL',
  'Flow'
]
/*
const Names = [
  'React',
  'Flux',
  'Redux',
  'Nuclide'
]
*/
export const Libs = shuffle(shuffle(Names))
export const Logos = shuffle(Names)
