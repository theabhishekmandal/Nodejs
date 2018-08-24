// This is an example of object method binding
// In this example this is the person object
var person = {
    firstname : 'Abhishek',
    lastname : 'Mandal',
    func : function(){
        return this;
    }
};

console.log(person.func());