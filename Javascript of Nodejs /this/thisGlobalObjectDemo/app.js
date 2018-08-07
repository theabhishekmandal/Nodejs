// when used alone, this refers to the global object
var x = this;
console.log(x);
var blah = function(){
  return this;
};
console.log(blah());
console.log('\n\n\n\n\n\n');

// when in strict mode this is undefined
console.log(myfunction());
function myfunction(){
    'use strict';
    return this;
}