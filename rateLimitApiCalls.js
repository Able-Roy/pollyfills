class promiseThrottle {
    constructor(limit) {
        this.maxRequests = limit
        this.currentRequests = 0
        this.queue = []
    }
    add(promise) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                promise,
                resolve,
                reject
            })
            this.run()
        })
    }
    run(){
        if(this.currentRequests <= this.maxRequests && this.queue.length > 0) {
            const { promise, resolve, reject } = this.queue.shift()
            this.currentRequests++
            Promise.resolve(promise).then((res) => resolve(res)).catch(reject).finally(() => {
                this.currentRequests--
                this.run()
            })
        }
    }
}
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    // Add more URLs as needed
];


const throttle = new promiseThrottle(2)
const fetchUrl = (url) => fetch(url).then(res => res.json()).then(res => res)

urls.forEach(url => throttle.add(fetchUrl(url)).then(res => console.log(res)).catch(err => console.log(err)))
