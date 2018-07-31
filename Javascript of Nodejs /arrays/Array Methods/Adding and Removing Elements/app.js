// various methods to add and remove elements in the array
var fruits = ["apple", "mango", "banana"];

// adding element at the end of the array
fruits.push("Kiwi");
console.log(fruits);

// adding element at the start of the array
fruits.unshift("leechi");
console.log(fruits); 

// using the array length method to add at the end
fruits[fruits.length] = "watermelon";
console.log(fruits); 

// do not use indexes for adding elements as they can create holes
fruits[fruits.length + 10] = "wrong fruit at wrong index"; 
console.log(fruits); 
var len = fruits.length;
for(var i = 0; i < len; i++){
   // process.stdout.write(fruits[i] + " ");
    if(fruits[0])
        fruits.push(fruits.shift());
    else fruits.shift();
}
console.log();
console.log(fruits);

// removing element from the end of array
fruits.pop();
console.log(fruits);

// removing element from the start of array
fruits.shift();
console.log(fruits);
