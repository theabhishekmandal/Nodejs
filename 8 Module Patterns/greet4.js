// function constructor
function Greetr(){
    this.greeting = 'Hello world!!!!';
    this.greet = function(){
        console.log(this.greeting);
    };
}

// we are passing the name of the function constructor rather than a new object
// By passing the name of the function constructor we can create a new object 
// everytime when require method is called.
// if we had passed a new object then the same object would have been returned on every call
// module.exports
module.exports = Greetr;