// Variables declared using const are similar to let variables except that they cannot be reassigned
const pi = 3.14156;
// pi = 12; <-- This will throw an error
console.log(pi);

// Decalring a variable with const is similar to let when it comes to Block Scope
var x = 10;
// Here x is 10
console.log(x);
{
    const x = 2;
    // Here x is 2
    console.log(x);
}
// Here x is 10 
console.log(x);


// const variables should be assigned when they are declared
//const blah;
//blah = 12;  <- this is incorrect and will throw an error 

// This is the correct method
const blah = 12;
