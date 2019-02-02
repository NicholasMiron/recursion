// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = []; 
  var checkelement = function(element) {
    //Check if element has a classList property
    if(element.classList) {
        //If it has classList property check its value aginst desired className
        if(element.classList.contains(className)) {
            //Push to output
            output.push(element);
        }
    } 
    //Check all elements childNodes
    for(var i = 0; i < element.childNodes.length; i++) {
        checkelement(element.childNodes[i]);
    }
  };
  checkelement(document.body);
  return output;
};
