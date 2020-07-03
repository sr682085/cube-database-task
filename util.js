const _ = require('lodash')

function sortByValue(object, sortingOrder = 1, keyHeading = "key", valueHeading = "value") {
  const arr = []
  for(let key in object) {
    arr.push({ [keyHeading]: toTitle(key), [valueHeading]: object[key] })
  }
  return _.sortBy(arr, element => element[valueHeading] * sortingOrder)
}

function toTitle(string) {
  return _.chain(string).camelCase().startCase().value()
}

module.exports = { sortByValue, toTitle }
