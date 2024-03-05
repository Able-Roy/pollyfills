class CustomEvent {
    constructor() {
        this.events = {}   
    }
    subscribe(event, callBack) {
       if(this.events[event]) {
           this.events[event].push(callBack)
       } else {
           this.events[event] = [callBack]
       }
    }
    unsubscribe(event, callBack) {
        if(this.events[event]) {
           this.events[event] = this.events[event].filter(cb => cb !== callBack)
        }
    }
    emit(event, ...args) {
        if(this.events[event]) {
            this.events[event].forEach(item => {
                item(...args)
            })
        }
    }
}

class EventEmitter {
    constructor() {
        this.instance = null
    }
    createInstance() {
        if(!this.instance) {
            this.instance = new CustomEvent()
        }
    }
    getInstance() {
        if(!this.instance) {
            this.createInstance()
        }
        return this.instance
    }
}


let event = new EventEmitter().getInstance()
event.subscribe('click', (val) => console.log('clicked', val))
event.subscribe('click', () => console.log('clicked 2'))
event.emit('click', 'hai')
