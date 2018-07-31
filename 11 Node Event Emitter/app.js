var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function name() {
   console.log('Somewhere, someone said hello'); 
}); // here greet is a property name

emtr.on('greet', function name() {
   console.log("A greeting occured"); 
});

console.log('Hello!');
emtr.emit('greet');
