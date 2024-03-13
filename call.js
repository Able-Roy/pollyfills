Function.prototype.customCall = function(context, ...args) {
    context = context || window
    const fnId = Symbol()
    context[fnId] = this
    let result = context[fnId](...args)
    delete context[fnId]
    return result
}

const fn = (arg1, arg2) => {
    console.log(arg1, arg2)
}

fn.customCall(null, 1, 2)


