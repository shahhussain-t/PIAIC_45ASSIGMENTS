"use strict";
//Q6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_name = "\t\n shah \n\t hussain";
console.log(`Name with whitespaces: ${person_name}`);
let removeWhiteSpaces = person_name.replaceAll('\n', '').trim().split(' ').join('');
let removeWhiteSpaces2 = removeWhiteSpaces.replace(/\s+/g, '');
console.log(`Name without whitespaces: ${removeWhiteSpaces2}`);
