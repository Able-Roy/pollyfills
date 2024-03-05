const get = (obj, path, defaultValue) => {
    if(!obj) {
        return defaultValue || undefined
    }
    let paths = path.split('.')
    let lookup = obj
    for(let i=0; i< paths.length; i++) {
        if(paths[i].endsWith(']')) {
            let breakUp = paths[i].split('[')
            lookup = lookup[breakUp[0]]
            lookup = lookup[breakUp[1].substr(0, breakUp[1].length - 1)]
        } else {
             lookup = lookup[paths[i]]   
        }
        if(!lookup) {
            return defaultValue || undefined
        }
    }
    if(lookup) {
        return lookup || defaultValue
    }
}

let object = { 'c': [{ 'python': { 'java': 3 } }] };

console.log(get(object, 'c[0].python.java'))
