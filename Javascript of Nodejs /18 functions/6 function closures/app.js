// COUNTER DILEMMA 
// Suppose you want to use a variable for counting something, and you want this counter be available to all functions.
// you could use a global variable and a function to increase the counter.

var counter = 0;

function add(){
    counter += 1;
}

add();
add();
add();
console.log(counter);

// but the problem is that any other code other than the add method can change the value of the counter

// Here function closure come into the picture
// we would use functions inside the functions to acheive the above 
var add_new = (function(){
    var count = 0;
    return function(){
        count += 1;
        return  count;
    }
}());

console.log(add_new());
console.log(add_new());
console.log(add_new());
console.log(add_new());

// EXPLANATION
/**
 * The variable add is assigned the return value of a self-invoking function.
 * The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
 * This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
 * This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
 * The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
 * 
 */

