const pipe = (...fns) => {
    return (value) => {
      return fns.reduce((acc, fn) => {
        return fn(acc)
    }, value)   
    }
} 


const square = (x) => x*x
const increment = (x) => ++x
const double = (x) => x * 2

const pipeChannel = pipe(square, increment, double)

console.log(pipeChannel(2))
