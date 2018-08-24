// This is an example of Range error
var num = 1;
try{
    num.toPrecision(500); // A number cannot have 500 significant digits
}
catch(err){

    // err.message will say toPrecision() argument must be between 1 and 100
    // err.name will say RangeError
    console.log(err.message + "\n" + err.name); 
}