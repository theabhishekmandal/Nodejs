var length = 16;                                        // Integer
var lastname = "Johnson";                               // String
var x = {firstname : 'abhisek', lastname : 'mandal'};   // object

// when you add integer and string then js treats integer as a string
var val = length + lastname;
console.log(val);

// all depends on the placing of the datatypes
val = length + length + lastname;
console.log(val);

val = lastname + length + length;
console.log(val);

val = length + lastname + length;
console.log(val);

val = length + x + length + lastname;
console.log(val);
