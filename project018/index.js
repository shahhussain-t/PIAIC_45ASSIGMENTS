// Q19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guest_list = ['shahwaiz Tahir', 'Manzar abbas', 'Maaz', 'Basit', 'ahmed'];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guestname = guest_list_1[_i];
    console.log("".concat(guestname, ", initing them to dinner"));
}
console.log("\n******Number of guest we invited******\n");
console.log("Number of Guest we invited: ".concat(guest_list.length));
