// Q3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Shah hussain";
var lowerCaseName = personName.toLowerCase();
var upperCaseName = personName.toUpperCase();
var titleCaseName = personName.split(' ').map(function (name) { return name[0].toUpperCase() + name.slice(1).toLowerCase(); }).join(' ');
console.log("Name in lowercase ".concat(lowerCaseName, "."));
console.log("Name in uppercase ".concat(upperCaseName, "."));
console.log("Name in titlecase ".concat(titleCaseName, "."));
