// This is an example of Type Error
// This type of error occurs when you try to use a value that is outside the type of expected values
var num = 1;
try{
    num.toUpperCase();
}
catch(err){
    // err.message will say that num.toUpperCase() is not a function
    // err.name will say TypeError
    console.log(err.message + "\n" + err.name);
}