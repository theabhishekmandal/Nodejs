var greeting = "Hello world!!!!!";
function greet(){
    console.log(greeting);
}


/*
    The below method is called REVEALING MODULE PATTERN:
    Exposing only the properties and methods you want via an returned object, i.e Through this module pattern we only expose the methods and not the variables 
*/
module.exports = {
    greet : greet
}; 