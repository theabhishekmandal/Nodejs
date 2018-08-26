// call() is a js predefined method
// It can be used to invoke a method with an owner object as an argument
// with call, an object can use a method belonging to another object

var person = {
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
};

var person1 = {
    firstname : "Abhishek",
    lastname : "Mandal"
};

var person2 = {
    firstname : "Mangekyo",
    lastname : "Sharingan"
};

console.log(person.fullname.call(person1));
console.log(person.fullname.call(person2));


// call method with arguments
var person = {
    fullname: function(city, country){
        return this.firstname + " " + this.lastname + " " + city + " " +  country;
    }
};

var person1 = {
    firstname : "Abhishek",
    lastname : "Mandal"
};

var person2 = {
    firstname : "Mangekyo",
    lastname : "Sharingan"
};

console.log(person.fullname.call(person1, "New Delhi", "India"));
console.log(person.fullname.call(person2, "tokyo", "Japan"));