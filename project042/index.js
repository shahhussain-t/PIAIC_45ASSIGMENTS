// Q43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicines = ["magince1", "magince2", "magince3", "magince4"];
function show_magicians(magicines) {
    magicines.forEach(function (magince) {
        console.log(magince);
    });
}
function make_great(magicines) {
    for (var i = 0; i < magicines.length; i++) {
        magicines[i] = " The Great " + magicines[i];
    }
    return magicines;
}
var newmagincearray = make_great(__spreadArray([], magicines, true));
console.log("\ncall the function with new return array\n");
show_magicians(newmagincearray);
console.log("\norginal array remani unchanged\n");
show_magicians(magicines);
