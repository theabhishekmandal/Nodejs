// Constructors in Javascript
/**
 * The examples from the previous chapters are limited. They only create single objects.
 * Sometimes we need a "blueprint" for creating many objects of the same "type"
 * The way to create an "object type", is to use an object constructor function.
 */

function Person(firstname, lastname, age, gender, val){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.greet = function(){
        return "hello " + this.firstname + " " + this.lastname;
    };
    this.val = val;
}

var ob = new Person('abhishek', 'mandal', 21, 'Male', "hello world");
console.log(ob.greet());


// you can add property to an object 
ob.date = "12 August";
console.log(ob);

// but to add a new property to a constructor then you had to do it in the constructor function

function Person(firstname, lastname, age, gender, val) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.greet = function () {
        return "hello " + this.firstname + " " + this.lastname;
    };
    this.val = val;
    // to add new property to constructor you have to do it here
    this.nationality = "Indian";
}
