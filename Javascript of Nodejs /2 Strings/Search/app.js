var str = "Please locate where 'locate' occurs";
// The search() method searches a string for a specified value and returns the position of the match
console.log(str.search("locate"));

/**
 * both search and indexOf returing the same result but there are some differences:
 * 1.   search() method cannot take second start position argument
 * 2.   indexOf() cannot take the benifit of searching through regex.
 *
 */
