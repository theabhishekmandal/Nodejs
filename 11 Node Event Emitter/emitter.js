// This is a simple implementation of the node emitter. In the next example, Node's inbuilt Node emitter is present

function Emitter(){
    this.events = {};
}

//event listner
/*
    here type can be anything such as opening a file, getting data from internet.

    Now for each property type we would have an array and each array would be containing listners.
*/
Emitter.prototype.on = function(type, listener){

    // if the property already exists then it is fine else make an array 
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};


// Emitting events 
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function (listener){
            if(listener)
             listener();
        });
    }
};

module.exports = Emitter;   