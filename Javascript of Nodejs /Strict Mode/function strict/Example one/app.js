// variables used inside a function without declaration will also cause error in strict mode
'use strict';
myFunction();
function myFunction(){
    console.log(x);
}