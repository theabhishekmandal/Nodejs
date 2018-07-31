// pass by value is for primitives i.e those variables which are not object
function change(b){
    b = 'maybe i got changed';
}

// this is a primitive
var a = 10;
change(a);
console.log(a);



// pass by reference is reflected on objects
function changeObj(val){
    val.prop1 = {};
    val.prop2 = function() {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);   // it's property gets changed