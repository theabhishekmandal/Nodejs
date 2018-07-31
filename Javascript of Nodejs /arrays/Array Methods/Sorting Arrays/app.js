// sorting an array
var fruits = ["banana", "avocado", "apple", "mango"];
fruits.sort();
console.log(fruits);


// you can use reverse() method to sort in descending order
var fruits = ["banana", "avocado", "apple", "mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);


// by default sort() sorts values as strings
// it means for integers it can produce unexpected results
var numbers = [9, 8, 2, 4, 10];
numbers.sort();
numbers.reverse();
console.log(numbers);

// for numeric type of sort we can use COMPARE FUNCTION
numbers.sort(function(a, b){ return a - b;});
console.log(numbers);

// to sort in descending order
numbers = [9, 8, 2, 4, 10];
numbers.sort(function(a, b){ return b - a;});
console.log(numbers);


// to sort an array of objects
var students = [
    {name : 'abhishek'}, 
    {name : 'Ankur'}, 
    {name : 'Anurag'}, 
    {name : 'Gupta'}, 
    {name : 'pathak'},
    {name : 'Nikhil'}
];
students.sort(function(a, b){
    return (a.name).localeCompare(b.name);
});
students.forEach(function(value, index, arr){
    process.stdout.write(arr[index].name +" ");
});

console.log();

var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

cars.sort(function(a, b){
    var one = a.type.toLowerCase();
    var two = b.type.toLowerCase();
    if(one < two) return -1;
    if(two < one) return 1;
});
console.log(cars);