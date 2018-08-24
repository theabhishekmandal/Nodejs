// when use strict is used inside a function, 
//it has local scope(only the code inside the function is in strict mode)

x = 3.14; // this won't cause any error

myfunction();
function myfunction(){
    'use strict';
    y = 3.14;
    console.log(y); // this will cause error cause 'use strict'; is local to this function
}

(function(){
    'use strict';
    function x(p1, p2){};
    delete x; // this will cause an error as deleting a function is not allowed
}());

(function(){
    'use strict';
    // function x(p1, p1){}; // this will cause an error as duplicating a parameter is not allowed
}());


(function(){
    'use strict';
    // octal numeric literals are not allowed
    var x = 010;
}());


(function () {
    'use strict';
    // octal escape characters are not allowed
    var x = "\010";
}());