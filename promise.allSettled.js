const promisesAllSettled = (promises) => {
  let settledCount = 0;
  const result = [];
  return new Promise((resolve) => { // No need for reject here
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          result[index] = { // Assign by index to maintain the order
            status: "fulfilled",
            value: res, // Change to 'value' to match standard
          };
        })
        .catch((err) => {
          result[index] = { // Assign by index to maintain the order
            status: "rejected",
            reason: err, // Change to 'reason' to match standard
          };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(result);
          }
        });
    });
  });
};

const promise1 = Promise.reject("rejected 1");
const promise2 = Promise.reject("reject 2");
const promise3 = Promise.reject("reject 3");
const promise4 = new Promise((resolve, reject) => reject("reject 4"));
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("resolved 5"), 3000),
);

promisesAllSettled([promise1, promise2, promise3, promise4, promise5])
  .then((res) => {
    console.log(res); // Should log the array of results after all promises have settled
  });
