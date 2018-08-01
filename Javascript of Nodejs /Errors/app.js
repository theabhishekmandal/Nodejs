// errors can occur so to avoid any mishappening we use exception handling
try{
    var one = 1 / 0;
    if(!isFinite(one)) throw "Not a number";
}
catch(err){
    console.log(err);
}