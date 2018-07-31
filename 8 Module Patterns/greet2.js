// adding a new property to the empty module.exports object and that property is a function
/*
     but when require is called it returns module.exports object and to access the property
     of the module.exports then you have to access the property using the require('filename.js').propertyname
     see the example 
*/
module.exports.greet = function(){
    console.log('hello world!!');
};