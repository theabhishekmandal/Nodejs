var arr = [
    "apple",
    "banana",
    "orange",
    "mango",
    null,
    undefined,
    ,
    ,
    "apple",
    {},
    "lemon"
];

console.log(arr.indexOf("lemon"));
console.log(arr.lastIndexOf("apple"));

// Now if you try to find the index of {} then it will return negative
// because objects cannot be compared. Instead convert empty object to String