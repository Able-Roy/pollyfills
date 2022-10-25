const dummyPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(time), time)
    })
}

const dummyPromise2 = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('error happended'), time)
    })
}
const promiseAll = (promises) => {
    let result = []
    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then((res) => {
            result[index] = res
            if(promises.length === result.length) return resolve(result)
        }).catch(err => {
            reject(err)
        })
        console.log(result)
    })  
    })
}



const driver = () => {
    const promise1 = dummyPromise(1000)
    const promise2 = dummyPromise(2000)
    const promise3 = dummyPromise(3000)
    const promise4 = dummyPromise2(4000)
    promiseAll([promise1, promise2, promise3, promise4])
    .then(res => {
        console.log('res', res)
    }).catch(err => {
        console.log(err, err)
    })
}

driver()
