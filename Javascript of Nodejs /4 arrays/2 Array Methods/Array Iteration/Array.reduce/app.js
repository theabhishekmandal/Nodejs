// the array reduce() method is used to reduce the array in a single value
var arr = [
  "apple",
  "banana",
  "orange",
  "mango",
  null,
  undefined,
  ,
  ,
  {},
  "lemon"
];

/*
    if there are undefined values or empty elements then just add empty string to the output. Otherwise
    it would produce unexpected results.
*/

var ans = arr.reduce(function(total, value, index, array){
    if(value && value.toString() != {}.toString()) return total + ' ' + value;
    return total + '';
});

console.log(ans);