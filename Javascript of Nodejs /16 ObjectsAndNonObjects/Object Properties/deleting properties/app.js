// Deleting properties from javascript objects
var person = {
    firstname : 'Abhishek',
    lastname : 'Mandal',
    age : '21',
    gender : 'Male'
};

console.log(person);

// deleting a property 
delete person.age;

console.log(person);