// This is an example of Reference Error
// This type of error occurs when an variable is used without being declared.

var x;
try{
    x = x + y;
}
catch(err){
    
    // err.message will display that y is not defined and err.name will say ReferenceError.
    console.log(err.message + "\n" + err.name);
}