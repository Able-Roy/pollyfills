// const flattenArray = (arr) => {
//     let newArray = []
//     arr.forEach((item, index) => {
//         if(Array.isArray(item)) {
//            newArray = [...newArray, ...flattenArray(item)]
//         } else {
//            newArray.push(item)        
//         }
//     })
//     return newArray
// }

// console.log(flattenArray([1,2, [3, [4,5], 6], 7]))


const flattenArray = (arr) => {
    return arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flattenArray(item) : item), [])
}

console.log(flattenArray([1,2, [3, [4,5], 6], 7]))
