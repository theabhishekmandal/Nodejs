// When function is defined inside a object then it becomes a method
// invoking a function as method
var person = {
    firstname:"John",
    lastname:"Doe",
    fullname : function(){
        return this.firstname + " " + this.lastname; 
    }
};

console.log(person.fullname());


// Invoking a function using function constructor
function myfunction(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

var x = new myfunction("Mangekyo", "Sharingan");
console.log(x.firstname);
console.log(x.lastname);