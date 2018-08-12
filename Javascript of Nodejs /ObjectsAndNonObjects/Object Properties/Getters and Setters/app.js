// adding getter and setter methods in javascript
// These are single type of objects i.e only unique objects but sometimes you want to create a blueprint for many objects
// and that's when you can use constructors
var person = {
    firstname : undefined,
    lastname : undefined,
    age : undefined,
    gender : undefined,
    setFirstname : function(firstname){
        this.firstname = firstname;
    },
    setLastname : function (lastname) {
        this.lastname = lastname;
    },
    setAge : function (age) {
        this.age = age;
    },
    setGender: function (gender) {
        this.gender = gender;
    },
    getFirstname : function () {
        return this.firstname;
    },
    getLastname : function () {
        return this.lastname;
    },
    getAge : function () {
        return this.age;
    },
    getGender : function(){
        return this.gender;
    }
};

var show = function(arr){
    let ans = "";
    for(let x in arr){
        if(!(typeof arr[x] == "function")){
            ans += arr[x] + " ";
        }
    }
    console.log(ans);
    //console.log(Object.getOwnPropertyNames(arr));
};

show(person);
person.firstname = "Abhishek";
person.lastname = "Mandal";
person.age = 21;
person.gender = "male";
show(person);