// function constructor
function Greetr(){
    this.greeting = 'Hello world!!!';
    this.greet = function(){
        console.log(this.greeting);
    };
}

/*
    Rather than assigning a function or adding a function as a property we are passing an object to the empty module.exports
*/
module.exports = new Greetr();