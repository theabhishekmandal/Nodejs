// Constant objects can change but you cannot new constants to the variables
const car = {
    type :"Fiat",
    model : '500',
    color : 'white'
};

// changing a const value
car.color = 'red';
console.log(car);

// assgining a new value to a const
// car  = {};  <- This will throw an error