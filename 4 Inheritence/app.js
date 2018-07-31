/*
    Inheritence in javascript is done throught function constructor and by using prototype keyword
*/

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var abhishek = new Person('Abhishek', 'Mandal');
console.log(abhishek.firstname);
console.log(abhishek.lastname);

// now we can add Properties to the Person object using the prototype keyword
// Syntax is functionconstructorname.prototype.newpropertyvalue

Person.prototype.greet = function(){
    console.log('hello ' + this.firstname + ' ' +this.lastname);
};

// now calling added function with the previously object created
abhishek.greet(); 


// creating another object 
var john = new Person('John', 'lenon');
console.log(john.firstname);
console.log(john.lastname);
john.greet();


// to see what the actual prototype object is
console.log(john.__proto__);
console.log(abhishek.__proto__);