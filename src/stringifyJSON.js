// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var newArr = [];
  if(typeof obj === "string") return '"' + obj + '"';
  else if(typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  }
  else if(obj === null) return 'null';
  else if(Array.isArray(obj)) {
    if(Array.length === 0) return '[]';
    else {
      obj.forEach(function(val) {
        newArr.push(stringifyJSON(val));
      });
      return '[' + newArr + ']';
    }
  } 
  else if(typeof obj === "object") {
  if(Object.keys(obj).length === 0) return '{}';
  else {
    Object.keys(obj).forEach(function(key) {
      if(typeof obj[key] !== "undefined" && !(obj[key] instanceof Function)) {
        newArr.push('"' + key + '":' + stringifyJSON(obj[key]) )
      }
    })
    return '{' + newArr + '}';
  } 

  }
};
