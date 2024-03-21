"use strict";
let person_name = "\t\n shah \n\t hussain";
console.log(`Name with whitespaces: ${person_name}`);
let removeWhiteSpaces = person_name.replaceAll('\n', '').trim().split(' ').join('');
let removeWhiteSpaces2 = removeWhiteSpaces.replace(/\s+/g, '');
console.log(`Name without whitespaces: ${removeWhiteSpaces2}`);
