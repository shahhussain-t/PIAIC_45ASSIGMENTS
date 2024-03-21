"use strict";
let personName = "Shah hussain";
let lowerCaseName = personName.toLowerCase();
let upperCaseName = personName.toUpperCase();
let titleCaseName = personName.split(' ').map(name => name[0].toUpperCase() + name.slice(1).toLowerCase()).join(' ');
console.log(`Name in lowercase ${lowerCaseName}.`);
console.log(`Name in uppercase ${upperCaseName}.`);
console.log(`Name in titlecase ${titleCaseName}.`);
