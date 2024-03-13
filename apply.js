Function.prototype.customApply = function(context, args) {
    context = context || window
    const fnId = Symbol()
    context[fnId] = this
    let res = context[fnId](...args)
    delete context[fnId]
    return res
}

const fn = (arg1, arg2) => {
    console.log(arg1, arg2)
}

fn.customApply(null, [1, 2])
