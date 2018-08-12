var ob = {
    firstname : 'Abhishek',
    lastname : 'Mandal',
    age : 21,
    gender : 'male'
};

for(x in ob){
    // use this way and not use ob.x <- this will show undefined
    console.log(ob[x]);
}