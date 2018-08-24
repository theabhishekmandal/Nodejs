// This is an example of Syntax error
// This type of Error occurs when the programming syntax is not right
try{
    eval("alert('Hello world)");
}
catch(err){
    // err.message will say Invalid or unexpected token
    // err.name will say SyntaxError
    console.log(err.message + "\n" +err.name);
}