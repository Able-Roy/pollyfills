const apiWithRetry = (endPoint, maxRetries, delay) => {
  let retryCount = 0;
  const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const retry = async () => {
    try {
      const res = await fetch(endPoint);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return await res.json();
    } catch (err) {
      if (retryCount < maxRetries) {
        retryCount++;
        await wait(delay);
        return await retry();
      } else {
        throw err;
      }
    }
  };
  return retry;
};

const retry = apiWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3, 3000);

retry()
  .then((res) => console.log('res', res))
  .catch((err) => console.log(err));
