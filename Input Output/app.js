var stdin = process.stdin;
var stdout = process.stdout;
stdin.resume();
stdin.setEncoding('utf-8');
var val = '';
stdin.on('data', function(input){
    val += input;
    var len = val.split('\r\n');
    if(len.length > 2){
        process.exit();
    }
});

process.on('exit', function(){
    var demo = null;
    demo = val.replace(/\s*$/, "").split("\n").map(str => str.replace(/\s*$/, ""));
    processData(demo);
});

function processData(val){
    console.log(parseInt(val));
}