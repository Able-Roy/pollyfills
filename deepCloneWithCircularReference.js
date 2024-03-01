const deepClone = (obj, cache = new WeakMap()) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  let copy = Array.isArray(obj) ? [] : {};
  cache.set(obj, copy);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], cache);
    }
  }
  return copy;
};
