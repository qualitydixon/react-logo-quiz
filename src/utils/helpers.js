import { path, Libs } from '../Constants/Constants'

export function libState () {
  let arr = []
  for (let i = 0; i < Libs.length; i++) {
    arr.push({
      hasLogo: false,
      logoGiven: '',
      lib: Libs[i]
    })
  }
  return arr
}

export function checkVictory (arr) {
  return arr.reduce((prev, curr) => {
    return (curr.lib === curr.logoGiven) ? prev + 1 : prev
  }, 0)
}

export function makePath (logo) {
  if (logo.indexOf(' ') > -1) {
    logo = logo.replace(/ /g, '_')
  }
  return `${path}${logo}.svg`
}

export function shuffle (arr) {
  let newArr = [...arr]
  for (let i = newArr.length - 1; i > 0; i--) {
    let n = Math.floor(Math.random() * i);
    [newArr[i], newArr[n]] = [newArr[n], newArr[i]]
  }
  return newArr
}
