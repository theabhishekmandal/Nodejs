var a;
var b = 'hei';
var c = 21.333;
var d = 1e9;
var e = 10;
var f = 0x34;
var g = { firstname : 'abhishek', lastname : 'mandal'};
var h = [];
var i = new Date();
var j = function(){};
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof j);

// now here it is difficult to know which is of which type as all of them are returning object
// You can search it in the constructor function folder
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);
