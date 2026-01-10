//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  return function wrapper(...args) {
    const hash = md5(args);

    const cachedItem = cache.find(item => item.hash === hash);

    if (cachedItem) {
      console.log("Из кеша: " + cachedItem.value);
      return "Из кеша: " + cachedItem.value;
    }

    const result = func(...args);

    cache.push({
      hash: hash,
      value: result,
    });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let lastArgs = null;
  let isCooldown = false;

  function wrapper(...args) {
    wrapper.allCount++;

    if (!isCooldown) {
      wrapper.count++;
      func(...args);
      isCooldown = true;
    } else {
      lastArgs = args;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (lastArgs) {
        wrapper.count++;
        func(...lastArgs);
        lastArgs = null;
      }
      isCooldown = false;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
