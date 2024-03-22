// Q24)More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
let county = "Pakistan";
let height = 157;
let rivers = ["Chelif River", "Wadi Majardah", "Boteti River"];
console.log("\n*******Equality and inequality Teset*******\n");
console.log("Is county  != 'subaru'? I predict True.");
console.log(county != 'subaru');
console.log("Is county == 'subaru'? I predict False.");
console.log(county === 'subaru');
console.log("\n*******Testing with lower case function*******\n");
console.log("Is county  != 'Pakistan'.toLowerCase()? I predict True.");
console.log(county != 'Pakistan'.toLowerCase());
console.log("Is county  == 'Pakistan'.toLowerCase()? I predict False.");
console.log(county == 'Pakistan'.toLowerCase());
console.log("\n*******Numerical testing*******\n");
console.log("Is height  == 156 ? I predict True.");
console.log(height == 157);
console.log("Is height  == 156 ? I predict False.");
console.log(height == 156);
console.log("Is height  >157 ? I predict False.");
console.log(height > 157);
console.log("Is height  <157 ? I predict False.");
console.log(height < 157);
console.log("Is height  >=157 ? I predict True.");
console.log(height >= 157);
console.log("Is height  <=157 ? I predict True.");
console.log(height <= 157);
console.log("Is height  !=157 ? I predict False.");
console.log(height != 157);
console.log("Is height  !=156 ? I predict True.");
console.log(height != 156);
console.log("\n*******Tests using 'and' and 'or' operators*******\n");
console.log("Is height  ==157 && height  >=157 ? I predict True.");
console.log(height == 157 && height >= 157);
console.log("Is height  ==157 && height  >157 ? I predict False.");
console.log(height == 157 && height > 157);
console.log("Is height  ==157 || height  >=157 ? I predict True.");
console.log(height == 157 || height >= 157);
console.log("Is height  ==157 || height  >157 ? I predict True.");
console.log(height == 157 || height > 157);
console.log("Is height  !=157 || height  >157 ? I predict False.");
console.log(height != 157 || height > 157);
console.log("\n*******Test whether an item is in a array*******\n");
console.log("Is rivers.includes('Chelif River') ? I predict True.");
console.log(rivers.includes('Chelif River'));
console.log("Is rivers.includes('Ravi') ? I predict False.");
console.log(rivers.includes('Ravi'));
console.log("\n*******Test whether an item is  not in a array*******\n");
console.log("Is !rivers.includes('Chelif River') ? I predict False.");
console.log(!rivers.includes('Chelif River'));
console.log("Is !rivers.includes('Ravi') ? I predict True.");
console.log(!rivers.includes('Ravi'));
export {};
