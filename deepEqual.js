const deepEqual = (a, b) => {
    if(a === b) {
        return true
    }
    if(typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        let keysOfA = Object.keys(a)
        let keysOfB = Object.keys(b)
        
        if(keysOfA.length !== keysOfB.length) {
            return false
        }
        for(key of keysOfA) {
           if(!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) {
               return false
           } 
        }
       return true
    }
    return false
}

// Example usage
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); // true

const obj3 = { a: 1, b: { c: 3 } };
console.log(deepEqual(obj1, obj3)); // false
