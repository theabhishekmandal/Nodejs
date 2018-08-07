/**
 *  As variables declared using var are accessible outside the block, their value remains unchanged. To
 * avoid this we can use the let keyword to declare our variables
 */
var x = 10;
// Here x is 10
console.log(x);
{
    var x = 2;
    // Here x is 2
    console.log(x);
}
// Here x is 2 again
console.log(x);

var y = 10;

// Here y is 10
console.log(y);
{
    // here y is 2
    let y = 2;
    console.log(y);
}
// here y is 10
console.log(y);