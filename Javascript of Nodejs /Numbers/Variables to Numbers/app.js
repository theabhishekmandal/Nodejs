// Converting variables to numbers can be done using three methods
// Number() method
// parseInt() method
// parseFloat() method

var arr = [ 
    Number(true),          // returns 1
    Number(false),         // returns 0
    Number("10"),          // returns 10
    Number("  10"),        // returns 10
    Number("10  "),        // returns 10
    Number("10 20"),       // returns NaN
    Number("John")         // returns NaN
];

for(var i = 0; i < arr.length; i++){
    process.stdout.write(arr[i] + " ");
}

// when Number() method is called on dates
process.stdout.write(Number(new Date("2017-09-30")).toString());    // returns 1506729600000


// parseInt() example
console.log();
arr = [
    parseInt("10"),         // returns 10
    parseInt("10.33"),      // returns 10
    parseInt("10 20 30"),   // returns 10
    parseInt("10 years"),   // returns 10
    parseInt("years 10")    // returns NaN
];   

for(var i = 0; i < arr.length; i++) process.stdout.write(arr[i] + " ");


// parseFloat() example
console.log();
arr =[
    parseFloat("10"),        // returns 10
    parseFloat("10.33"),     // returns 10.33
    parseFloat("10 20 30"),  // returns 10
    parseFloat("10 years"),  // returns 10
    parseFloat("years 10"),  // returns NaN 
];

for(var i = 0; i < arr.length; i++) process.stdout.write(arr[i] + " "); 