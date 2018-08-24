var val = "Hello world";

/**
 * Accessing String as array is unsafe
 * 1. It makes string looks like arrays but they are not
 * 2. val[0] = "H" does not gives error but does not work
 */
val[0] = "O";
console.log(val); // this would not show any changes

// to convert string to array use split 
val = val.split("");
console.log(val);
val[0] ='O';
console.log(val);

// to convert back to String use join
val = val.join("");
console.log(val);