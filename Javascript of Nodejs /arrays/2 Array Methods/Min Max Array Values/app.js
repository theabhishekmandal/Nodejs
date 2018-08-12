var Number = [1, 2, 3, 4, 5, 6, 7];
var maximum = function(arr){
    return Math.max.apply(null, arr);
};

var minimum = function(arr){
    return Math.min.apply(null, arr);
};

// max value
console.log(maximum(Number));

// min value
console.log(minimum(Number));