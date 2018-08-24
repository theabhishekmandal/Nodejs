// the constructor property returns the constructor function for all javascript variables.
console.log("John".constructor);
console.log({}.constructor);
console.log(false.constructor);
console.log([].constructor);
console.log((1).constructor);
console.log(new Date().constructor);
console.log(function(){}.constructor);

/* sometimes it is difficult to know the type of object such as array, date, object literals
    In such type of situation you can use the constructor function
*/

var one = [];
var two = {};
var three = new Date();

// first method
console.log(three.constructor.toString().indexOf("Date") > -1);

// second method
console.log(one.constructor === Array);
console.log(two.constructor === Object);
console.log(three.constructor === Date);
