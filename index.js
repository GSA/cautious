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

function clone(item){
  try {
    return JSON.parse(JSON.stringify(item))
  } catch (error) {
    return item
  }
}

function equal(a, b) {
  if (equalNumbers(a, b)) {
     return true
  } else if (equalJSON(a, b)) {
    return true
  } else {
    return false
  }
}

function equalNumbers(a, b) {
  try {
    return Number(a) === Number(b)
  } catch (error) {
    return false
  }
}

function equalJSON(a, b) {
  try {
    return JSON.stringify(a) === JSON.stringify(b)
  } catch (error) {
    return false
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

function last(iterable, index) {
  try {
    if (Array.isArray(iterable) || typeof iterable === 'string') {
      return iterable[iterable.length - 1]
    }
  } catch (error) {
    return undefined
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

function endsWith(string, ender) {
  try {
    return string.substring(string.length - ender.length) === ender
  } catch (error) {
    return false
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

function sortBy(array, func) {
  try {
    return array.sortBy(func)
  } catch (error) {
    return array
  }
}


function penultimate(iterable, index) {
  try {
    if (Array.isArray(iterable) || typeof iterable === 'string') {
      return iterable[iterable.length - 2]
    }
  } catch (error) {
    return undefined
  }
}

module.exports = {
  capitalize,
  clone,
  endsWith,
  equal,
  equalJSON,
  equalNumbers,
  excludes,
  has,
  includes,
  last,
  len,
  join,
  map,
  overlaps,
  penultimate,
  range,
  run,
  some,
  sortBy,
  startsWith
};
