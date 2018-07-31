// splice() method is used to add new elements to the array
var fruits = [
    "banana", "apple", "orange", "mango"
];

// first parameter defines the position where new elements should be added.
// second elements defines how many elements should be removed.
// the rest of parameters define the new elements to be added.
fruits.splice(2, 0, "lemon", "kiwi");
console.log(fruits);

// splice can be used also to remove elements
fruits.splice(0, 1); // means remove one element starting from index 0
console.log(fruits);