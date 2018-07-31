// object properties and methods
var obj = {
    greet : 'hello'
};



console.log(obj.greet);
console.log(obj['greet']);

// we can pass the property to  a var
var prop = 'greet';
console.log(obj[prop]);


// functions and arrays
var arr = [];

// you can pass primitives strings and objects as well as functions in an array

arr.push(1);
arr.push("hello world");

// as functions are first class we can pass them too

arr.push(function(){
    console.log('hello world 1');
});

arr.push(function () {
    console.log('hello world 2');
});

arr.push(function () {
    console.log('hello world 3');
});

arr.push(null);

// now to access each of these we have a foreach loop

arr.forEach(function(fn){
    if(typeof fn === 'number' || typeof fn === 'string') 
        console.log(fn);
    else if (typeof fn === 'function')
        fn();
});


