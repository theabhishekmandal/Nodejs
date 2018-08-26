var text = '{ "Attacks" : [' +
    '{ "firstName":"Rasengan" , "lastName":"Rasenshuriken" },' +
    '{ "firstName":"Mangekyo" , "lastName":"Sharingan" },' +
    '{ "firstName":"kage banshin" , "lastName":"jutsu" } ]}';

var jsobj = JSON.parse(text);
console.log(jsobj.Attacks[0]);
console.log(jsobj.Attacks[1]);


console.log(jsobj.Attacks[1].firstName);
console.log(jsobj.Attacks[1].lastName);

