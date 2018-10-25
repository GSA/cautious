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

function range(n) {
  try {
    if (n) {
      return [...Array(n).keys()]
    } else {
      return []
    }
  } catch (error) {
    return []
  }
}

function round(n) {
  try {
    return Math.round(n * 10) / 10
  } catch (error) {
    return null
  }
}

function startsWith(string, starter) {
  try {
    return string.substring(0, starter.length) === starter
  } catch (error) {
    return false
  }
}

function len(inpt) {
  try {
    if (typeof inpt === 'string') {
      return inpt.length;
    } else if (Array.isArray(inpt)) {
      return inpt.length
    }
  } catch (error) {
    return 0;
  }
}

function some(array) {
  return Array.isArray(array) && array.length > 0;
}

module.exports = {
  capitalize,
  excludes,
  has,
  includes,
  len,
  join,
  map,
  overlaps,
  range,
  run,
  some,
  startsWith
};
