/*
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. 
Create a prototype method that given a nested path, either return the value or undefined.
*/
// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  let arr = string.split('.');
  //console.log(arr);
  let ret = this;
  for(i = 0; i < arr.length; i++) {
    if(ret[arr[i]]) {
      ret = ret[arr[i]];
    } else {
      ret = undefined;
      break;
    }
  }
  return ret;
}

