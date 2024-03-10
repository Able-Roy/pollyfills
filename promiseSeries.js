const promiseSeries = (arrPromises) => {
  let result = []
  let chain = Promise.resolve()
  arrPromises.forEach((task, index) => {
    chain = chain.then(() => {
      return Promise.resolve(task).then(res => {
        result[index] = res
      }).catch(err => {
        result[index] = err
      })
    })
  })
  return chain.then(() => result)
}

const promise1 = Promise.resolve('1')
const promise2 = Promise.resolve('2')
const promise3 = Promise.resolve('3')
const promise4 = new Promise((resolve) => setTimeout(() => resolve('0'), 3000))

promiseSeries([promise4, promise1, promise2, promise3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


