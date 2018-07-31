// module.exports containing the function will return back the function and now we can call it
var greet = require('./greet1');

greet();

/*
    greet2 will contain module.exports and to call the function added to module.exports you can do this
*/
var greet2 = require('./greet2');

greet2.greet();

/*
    Another way to call is to get the property from the require by using require.propertyname. This is because require contains module.exports and we had added a function as a property to module.exports
*/

var greet3 = require('./greet2').greet;

// greet3 is now a function
greet3();


// now require will give back the object that we passed to module.exports
/*
     But here is a catch if you try to use require on the same greet3.js on a new variable
     then the same object will get returned, because module.exports is called only once.
     If you try to use require on a new variable then the previously module.exports gets cached
     and returns the same value. 
     Check for example below
*/var greet4 = require('./greet3');
greet4.greet();
greet4.greeting = 'I changed the property';

var greet4b = require('./greet3');
// Now here the change in the greeting property will get reflected back
greet4b.greet();



/* 
    In the above example we are getting the same object when we called the require method,
    Now to create a new object you pass the constructor name to the module.exports rather than
    passing new object. 
*/

var greet5 = require('./greet4');
var ob = new greet5();
ob.greet();

ob.greeting = 'This change in property would not be reflected';

var greet5a = require('./greet4');
var oba = new greet5a();
oba.greet();  


/*
    This example is based on reavling module pattern:
    Check greet5.js for further info

    Below are the two ways to do this
*/

// first method
var greet6 = require('./greet5');

greet6.greet();

// second method
var greet6a = require('./greet5').greet;

greet6a();