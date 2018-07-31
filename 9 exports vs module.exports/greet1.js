/*
    This is an example of mutation. In this I won't set anything new to exports object.
    Rather I will add a property to exports object which will be reflected back in module.exports also
    This is called Mutation.
*/

exports.greet = function(){
    console.log('hello world');
};

console.log(exports);
console.log(module.exports);