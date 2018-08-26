/**
 * js parameters rules
 * 1: js functions do not specify the types for the parameters.
 * 2: js functions do not perform the type checking of the passed arguments.
 * 3: js functions do not check the number of arguments recieved. 
 */

 // if number of arguments that are passed are less, then the missing values are replaced by undefined
 function myfunction(x, y){
     console.log(x + " " + y);
 }

 myfunction("hello");


 function findmax(){
     var i;
     var max = -Infinity;
     for(i = 0; i < arguments.length; i++){
         if(typeof arguments[i] == 'number' && arguments[i] > max){
             max = arguments[i];
         }
         else continue;
     }
     return max;
 }
 console.log(findmax(1, 3 , 4, 5));
 console.log(findmax(1, 3 , 4, undefined));


