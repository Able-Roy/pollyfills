class FetchWitCache {
    constructor() {
        this.cache = new Map();
    }

    async fetchWithCache(url, options = {}) {
        const key = this.generateKey(url, options);
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        const fetchCall = fetch(url, options)
            .then(res => res.json())
            .then(res => {
                this.cache.set(key, res);
                return res;
            })
            .catch(err => {
                this.cache.delete(key); // Remove from cache if the request fails
                throw err;
            });

        this.cache.set(key, fetchCall);
        return fetchCall;
    }

    generateKey(url, options) {
        return `${url}${JSON.stringify(options)}`;
    }
}

const ApiClient = new FetchWitCache();

const response = ApiClient.fetchWithCache('https://jsonplaceholder.typicode.com/posts/1');
const response2 = ApiClient.fetchWithCache('https://jsonplaceholder.typicode.com/posts/1');

response.then(res => console.log('1', res));
response2.then(res => console.log('2', res));
