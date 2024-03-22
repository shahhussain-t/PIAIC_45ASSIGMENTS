"use strict";
// Q35) Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Cat", "Lion", "leapoard"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log(`\n*** Statment about each animals***\n`);
for (let i = 0; i < animals.length; i++) {
    console.log(`The ${animals[i]} is wild pet`);
}
console.log(`\n*** comment about pet***\n`);
console.log(`The cat would be a great pet amound these animals.`);
