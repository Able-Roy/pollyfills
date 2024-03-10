const debounce = (fn, delay) => {
    let timer
    const debounced = (...args) => {
    		let context = this
        if(timer)clearTimeout(timer)
        timer = setTimeout(() => {
           fn.apply(context, args) 
        }, delay)
    }
    debounced.cancel = () => {
    	if(timer) clearTimeout(timer)
    }
    return debounced
}

const onClickHandler = () => {
    console.log('click')
}

const debouncedCallBack = debounce(onClickHandler, 3000)
