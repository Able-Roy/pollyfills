const arrayWithNegativeIndex = (array) => {
    return new Proxy(array, {
        get: function(target, prop, reciever) {
            if(parseInt(prop) < 0) {
                prop = target.length + parseInt(prop)
            }
            return Reflect.get(target, prop, reciever)
        }
    })
}

const arr = arrayWithNegativeIndex([1,2,3,4,5])
console.log(arr)
console.log(arr[-1])
console.log(arr[-5])
