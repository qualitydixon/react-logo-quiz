let hasLogo = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false
}
let observer = null

function emitChange () {
  console.log('hasLogo: ', hasLogo)
  observer(hasLogo)
}

export function observe (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function canDropLogo (idx) {
  return hasLogo[idx] === false
}

export function dropLogo (boo, idx) {
  console.log('Dropped!')
  hasLogo[idx] = boo
  emitChange()
}
