// Variables declared globally have global scope
var one = 'global variable';

// Variables declared inside function have function scope
function val(){
    var two = 'function variable';
    console.log(one);
    console.log(two);
}

// this will throw error cause two does not exist -> console.log(two);
val();

// Variables declared using var do not have block scope
// They can be accessed outside the block
{
    var blah = 'block variable';
}
console.log(blah);


// Variables declared using let cannot be accessed outside the block
{
    let hel = 'cannot be accessed outside';
}
console.log(hel);
