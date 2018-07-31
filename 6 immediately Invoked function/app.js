/* 
    an immediately invoked function is weird type of functon,
    it has a function expression that does not have a name and is immediately called
    as soon as the function definition is completed.

    also this function expression should be kept inside () brackets
    
    the variable inside the immediately invoked function is protected from the outside 
    variables. If same name variable exists then it does not conflict.
*/
(function (){
    var firstname = 'abhishek';
    console.log(firstname);
}());  // the () brackets shows that it is immediately invoked


// you can also pass parameters to this type of function
(function(firstname, lastname){
    console.log('hello ' + firstname + " " + lastname);
}('abhishek', 'mandal'));


