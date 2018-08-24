// You can add property to an existing object
// You can add property to an object constructor 
// either by declaring it inside the function constructor
// or by using the prototyping 
// This is an example of prototyping
function Person(first, last, age, gender){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
}

Person.prototype.name = function(){
    return this.firstname + " " + this.lastname + " " + this.age + " " + this.gender;
};
var ob = new Person('abhishek', 'mandal', 21, 'male');

console.log(ob.name());

 