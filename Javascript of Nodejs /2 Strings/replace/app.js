// replacing string content
// It does not replace the contents of the original string, rather it returns another value
// It replaces only the first match
var str = 'Please use Microsoft edge and Microsoft edge';
str = str.replace('Microsoft edge', 'Mozilla firefox');
console.log(str);

// to replace all of the occurences then use regular expressions
str = 'Please use Microsoft edge and Microsoft edge';
str = str.replace(/Microsoft edge/g, "Mozilla firefox"); // g for global match
console.log(str);

