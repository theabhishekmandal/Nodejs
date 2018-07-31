/**
 *  create array using var arr = [] and not arr = new Array()
 */

// creating an array
arr = new Array("hello world", "this", "is", "Abhishek");
console.log(arr);

// second method
arr = [];
arr.push("another");
arr.push("way");
arr.push("to");
arr.push("Create");
arr.push("array");

console.log(arr);

// arrays can hold different type of elements
arr.push(12);
arr.push(34.67);
arr.push(1e9);

console.log(arr);

// arr initialised with a given size
var arr1 = new Array(12);

console.log(arr1);
// traversing array using for loop
console.log('array values');
for(var i = 0; i < arr.length; i++) process.stdout.write(arr[i] + " ");