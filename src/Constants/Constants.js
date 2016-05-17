import { shuffle } from '../utils/helpers'

export const ItemTypes = {
  LOGO: 'logo'
}

export const path = '../../res/logos/'
/*
const Names = [
  'React',
  'Flux',
  'Redux',
  'Nuclide',
  'Webpack',
  'Relay',
  'ESLint',
  'Jest',
  'Redux-Observable',
  'Babel',
  'GraphQL',
  'Flow',
  'Karma'
]
*/
const Names = [
  'React',
  'Flux',
  'Redux',
  'Nuclide'
]
export const Libs = shuffle(shuffle(Names))
export const Logos = shuffle(Names)
