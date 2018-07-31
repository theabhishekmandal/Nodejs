// The every() method check if all array values pass a test.

var arr = [1, 2, 3, 4, 5, 6, 7 , 8];
// Here in the function it checks if all the values are greater than 0
// if all the array values are greater than 0 then it will return a single true value 
// otherwise the answer is false
// if the function is left empty then the answer is false 
var blah = arr.every(function(value, index, array){
    return value > 0;       
});

console.log(blah);