// This is the way to declare a function
function multiply(a, b){
    return a * b;
}

console.log(multiply(10 , 14));


// This is the way to declare a function expression
var x = function (a, b) {
    return a * b;
}

console.log(x(10, 10));


// This is the way to declare a function constructor
var blah = new Function("a", "b", "return a * b");
console.log(blah(1, 2));


// Function hoisting meaning moving the definition before the declration
console.log(myfunction(2, 3));

function myfunction(a, b){
    return a * b;
}


// Self invoking function
(function demo(){
    console.log("hello world");
})();


// function are objects, you can apply properties and method on them
// it is a type of function where you can have variable number of parameters
function myfunction(){
    console.log(arguments.length);
}

myfunction("hello world");
myfunction("hello", "world");

//toString() method returns function as a string because function is an object in js
var x = function demo(){}.toString();
console.log(x);