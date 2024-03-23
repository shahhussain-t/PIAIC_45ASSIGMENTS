// Q16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// previus exercis code
var guest_list = ['shahwaiz Tahir', 'Manzar abbas', 'Maaz', 'Basit', 'ahmed'];
console.log("\n******Guest we invited******\n");
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guestname = guest_list_1[_i];
    console.log("".concat(guestname, ", initing them to dinner\n"));
}
console.log("\n*****Guest who can't make it ******\n");
console.log("".concat(guest_list[1], " can't make it\n"));
console.log("".concat(guest_list[2], " can't make it\n"));
guest_list[1] = "Nauman shahid";
guest_list[2] = "Yasir hussain";
var newGuestList = __spreadArray([], guest_list, true);
console.log("\n*****new Guest list******\n");
for (var _a = 0, newGuestList_1 = newGuestList; _a < newGuestList_1.length; _a++) {
    var guestname = newGuestList_1[_a];
    console.log("".concat(guestname, ", initing them to dinner\n"));
}
// we found biger dinner table
console.log("\n*****we Found a bigger dinner table******\n");
var middle_of_array = Math.floor((newGuestList.length) / 2);
newGuestList.unshift("muneeb");
newGuestList.splice(middle_of_array, 0, 'atiq ur rehman');
newGuestList.push("Aziz ur rehman");
for (var _b = 0, newGuestList_2 = newGuestList; _b < newGuestList_2.length; _b++) {
    var guestname = newGuestList_2[_b];
    console.log("".concat(guestname, ", initing them to dinner as we have a bigger dinner table\n"));
}
