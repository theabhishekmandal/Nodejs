// function statement
function greet(){
    console.log('hello abhishek');
}

greet();

// functions in java script are first-class
// first - class means objects and functions are treated as same things
function  logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
// a function without a name assigned to a variable
var greetme = function(){
    console.log('hello there');
};

greetme();

// it's first-class
logGreeting(greetme);

// using a function expression on fly
logGreeting(function(){
    console.log('using function expression on fly');
});