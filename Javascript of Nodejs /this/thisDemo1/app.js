// this refers to the owner of the function
var person = {
    firstname : 'John',
    lastname : 'Doe',
    id : 12,
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
};
console.log(person.fullname());
