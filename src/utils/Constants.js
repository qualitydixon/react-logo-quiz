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

export const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '10px',
    width: 500,
    margin: '0px auto',
    height: 300,
    borderRadius: 5,
    transform: 'translate(-50%, -50%)'
  }
}

export const Libs = shuffle(Names)
export const Logos = shuffle(Names)
