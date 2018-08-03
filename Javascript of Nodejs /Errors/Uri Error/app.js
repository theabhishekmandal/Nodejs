// This is an example of Uri Error
// This type of error occurs when there are illegal characters used in uri function.
try{
    decodeURI('%%%');
}
catch(err){
    // err.message says URI malformed
    // err.name says URIError
    console.log(err.message + "\n" + err.name);
}