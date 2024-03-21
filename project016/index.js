// Q17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("\n*****we Found a bigger dinner table******\n");
var middle_of_array = Math.floor((newGuestList.length) / 2);
newGuestList.unshift("muneeb");
newGuestList.splice(middle_of_array, 0, 'atiq ur rehman');
newGuestList.push("Aziz ur rehman");
for (var _b = 0, newGuestList_2 = newGuestList; _b < newGuestList_2.length; _b++) {
    var guestname = newGuestList_2[_b];
    console.log("".concat(guestname, ", initing them to dinner as we have a bigger dinner table\n"));
}
// online can invite two people for dinner
console.log("\n*****we can only invite two people for dinner******\n");
for (var i = 0; newGuestList.length; i++) {
    if (newGuestList.length > 2) {
        var removeguest = newGuestList.pop();
        console.log("".concat(removeguest, " sorry we can\u2019t invite you to dinner"));
    }
    else {
        break;
    }
}
console.log("\n*****Guest who still invited******\n");
for (var _c = 0, newGuestList_3 = newGuestList; _c < newGuestList_3.length; _c++) {
    var guestname = newGuestList_3[_c];
    console.log("".concat(guestname, ", you are still invited\n"));
}
console.log("\n*****Empty guest list******\n");
for (var i = 0; newGuestList.length; i++) {
    newGuestList.pop();
}
console.log("Guest list: ", newGuestList);
