const executeParallel = (tasks) => {
    let results = []
    return new Promise((resolve, reject) => {
        tasks.forEach((task) => {
            Promise.resolve(task).then(res => {
                results.push(res)
            }).catch(err => {
                results.push(err)
            }).finally(() => {
                if(results.length === tasks.length) {
                    resolve(results)
                }
            })
        })
    })
}

// Example usage:
const task1 = new Promise((resolve) => setTimeout(() => resolve('Task 1 completed'), 1000));
const task2 = new Promise((resolve) => setTimeout(() => resolve('Task 2 completed'), 2000));
const task3 = new Promise((resolve) => setTimeout(() => resolve('Task 3 completed'), 3000));

executeParallel([task1, task2, task3])
  .then(results => console.log(results))
  .catch(error => console.error(error));
