// apply() is also a predefined js method
// The difference between call and apply is that
// call takes the arguments seperately 
// apply takes the arguments in the form of array
var person = {
    fullname : function(city, country){
        return this.firstname + " " + this.lastname + " " + city + " " + country;
    }
};

var places = [
    ['New Delhi', "India"], 
    ["Tokyo", "Japan"]
];

var person1 = {
    firstname : "Abhishek",
    lastname : "Mandal"
};

var person2 = {
    firstname : "Mangekyo",
    lastname : "Sharingan"
};
console.log(person.fullname.apply(person1, places[0]));
console.log(person.fullname.apply(person2, places[1]));