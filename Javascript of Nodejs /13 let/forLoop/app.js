/*
    In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.

    In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.

    When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.
*/ 

// for loop example using var and let keyword
var i = 10;
for(var i = 0; i < 10; i++){}

// value of i exists even the for loop is finished
console.log(i);


// when variable declared with let inside the for loop ends after execution
let j = 5;
for(let j = 0; j < 10; j++){}
console.log(j);