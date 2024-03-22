"use strict";
// Q32) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
Object.defineProperty(exports, "__esModule", { value: true });
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of ordinal_numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
for (let i = 0; i < ordinal_numbers.length; i++) {
    if (i === 0) {
        console.log(`${i + 1}st.${ordinal_numbers[i]}`);
    }
    else if (i === 2) {
        console.log(`${i + 1}nd.${ordinal_numbers[i]}`);
    }
    else if (i === 3) {
        console.log(`${i + 1}rd.${ordinal_numbers[i]}`);
    }
    else {
        console.log(`${i + 1}th.${ordinal_numbers[i]}`);
    }
}
