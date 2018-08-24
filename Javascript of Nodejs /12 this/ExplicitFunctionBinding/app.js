// the apply() and call() methods are both predefined javascript methods
// They both can be used to call an object method with another object as an argument.
var person = {
    fullname : function () {
        return this.firstname  + " " + this.lastname;
    }
};

var abhishek = {
    firstname  : 'abhishek',
    lastname : 'mandal'    
};

console.log(person.fullname.apply(abhishek));