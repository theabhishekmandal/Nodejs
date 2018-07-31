/*
    module is a plain JavaScript object with an exports property. exports is a plain JavaScript variable that happens to be set to module.exports.
    At the end of your file, node.js will basically 'return' module.exports to the require function

    If you set a property on exports such as exports.a = 9;
    then module.exports.a is also set to 9. THIS IS CALLED MUTATION i.e adding property to an object

    Now, if you set exports to something new such as exports = 9, then it will no longer be set to 
    module.exports, so exports and module.exports are no longer same object.

    Technically exports and module.exports should point to same reference(thats correct!!). But we use "=" when assigning function().... to exports, which creates another object in the memory. So, module.exports and exports produce different results

*/

// now I will assign a function to exports which won't be reflected back in module.exports
exports = function(){
    console.log('hello world');
};

console.log(exports);
console.log(module.exports);