const memoize = (fn) => {
	let cache = new Map()
  return (arg) => {
  	if(cache.has(arg)) {
    	return cache.get(arg)
    } else {
    	result = fn(arg)
      cache.set(arg, result)
      return result
    }
  }
}

const square = (num) => {
	console.log('inside square')
	return num * num
}

const memoisedfn = memoize(square)

console.log(memoisedfn(5))
console.log(memoisedfn(1))
console.log(memoisedfn(5))
