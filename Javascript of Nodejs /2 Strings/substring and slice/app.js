// extracting string parts from the string
//  slice(start, end)
// substring(start, end)
// substr(start, length)


// slice() method extract the part of the string and returns it
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

// you can also pass negative values to the slice method
// if parameter is negative, then position is counted from the end of the string
console.log(str.slice(-1));
console.log(str.slice(-6, -1));


// substring() method is similar to slice but it does not accept negative values
console.log(str.substring(0));
console.log(str.substring(0, 6));


// substr() method is similar to substring but here the second parameter specifies the length of the string
// extracted, if second arguement is not passed then it will slice the rest of part
console.log(str.substr(0, 5));
console.log(str.substr(0, 13));
console.log(str.substr(7));
console.log(str.substr(-7));


