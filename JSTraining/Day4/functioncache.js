/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. 
In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.
*/
function cache(func) {
    let cache_data = {};
    
    return (...args) => {
      let arg1 = args[0];
      let arg2 = args[1];
  
      let cache_key = JSON.stringify(args);;
      if (cache_key in cache_data) {
        return cache_data[cache_key];
      }else {
        cache_data[cache_key] = func(arg1,arg2);
        return cache_data[cache_key];
      }
    }
  }
  