// errors can occur so to avoid any mishappening we use exception handling
try{
    var one = 1 / 0;
    // throwing an error so that it can be catched.
    if(!isFinite(one)) throw "Not a number";
}
catch(err){
    console.log(err);
}