// the find() method returns the value of the first array element that passes a test function.
var num = [4, 9, 16, 25, 29];
var first = num.find(function(value, index, array){
    return value > 18;
});

console.log(first);