/*
    This is an example of what happens when we compare different types and how javascript converts them
    for you during conversion.
*/ 

// evaluates to true;
console.log(2 < 12); 

// evaluates to true as js converts it to integer
console.log(2 < "4"); 

// evaluates to true as js converts it to integer
console.log("12" > 2);

// evaluates to false as alphabetical strings cannot be compared
console.log(2 > "four");
console.log(2 < "four"); 
console.log(2 == "four");

// if both the number is represented as strings then strange things happen

// this evaluates to true because alphabetically two comes before one
console.log("2" > "12");
// this evaluates to false
console.log("2" < "12");
// this evaluates to true
console.log("2" == "2");
