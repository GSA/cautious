function run(item, func) {
  try {
    return item[func]()
  } catch (error) {
    return item
  }
}

function capitalize(string) {
  try {
    return string[0].toUpperCase() + string.substring(1)
  } catch (error) {
    return string
  }
}

function join(array, joiner) {
  try {
    return array.join(joiner)
  } catch (error) {
    return array
  }
}

function map(array, func) {
  try {
    return array.map(func)
  } catch (error) {
    return array
  }
}

function includes(array, item) {
  try {
    return array.includes(item)
  } catch (error) {
    return false
  }
}

function excludes(array, item) {
  return includes(array, item) === false
}

function has(obj, key) {
  try {
    return obj.hasOwnProperty(key)
  } catch (error) {
    return false
  }
}

function overlaps(array1, array2) {
  return Array.isArray(array1) && array1.some(item => includes(array2, item))
}

function some(array) {
  return Array.isArray(array) && array.length > 0;
}

module.exports = {
  capitalize,
  excludes,
  has,
  includes,
  join,
  map,
  overlaps,
  run,
  some
};
