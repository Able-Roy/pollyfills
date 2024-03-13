Function.prototype.customBind = function(context, ...args) {
    context = context || window;
    let fn = this;
    const newFunction = function(...params) {
        let finalContext = this instanceof newFunction ? this : context;
        let fnId = Symbol();
        finalContext[fnId] = fn;
        params = [...args, ...params];
        let res = finalContext[fnId](...params);
        delete finalContext[fnId];
        return res;
    };
    return newFunction;
};

const fn = (...args) => {
    args.forEach(item => console.log(item));
};

const bindedVersion = fn.customBind(null, 1, 2);

bindedVersion(3);
