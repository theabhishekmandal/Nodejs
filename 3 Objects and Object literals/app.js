/*
    In javascript object is defined as a name value pair. so the var hello is a javascript object
*/
var hello = {name : 'abhishek mandal'};

// various ways to call the variable of the object
console.log(hello.name);
console.log(hello['name']);


/*
    below is an example of object literal: In java script name-value pair seperated by comma is called object 
    literals
*/

var abhishek = {
    firstname : 'altair',
    lastname: 'ibn-la-ahad',
    greet: function(){
        console.log("hello "+ this.firstname + " " + this.lastname);
    },
    address:{
        houseno: 'c - 67',
        blockname : 'Ganesh Nagar',
        city : 'Delhi'
    }
};

/*
    you can use both the notation dot as well as square brackets notation to access the name value pairs
    for functions it is better to use dot notation to call them.
*/ 
console.log(abhishek.firstname);
console.log(abhishek.lastname);
abhishek.greet();
console.log(abhishek['address']['houseno']);
