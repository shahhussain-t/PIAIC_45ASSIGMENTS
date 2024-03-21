// Q15) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let guest_list:string[]=['shahwaiz Tahir','Manzar abbas','Maaz','Basit','ahmed']


console.log(`\n******Guest we invited******\n`)


for(let guestname of guest_list){

    console.log(`${guestname}, initing them to dinner\n`)

}


console.log("\n*****Guest who can't make it ******\n")


console.log(`${guest_list[1]} can't make it\n`)

console.log(`${guest_list[2]} can't make it\n`)



guest_list[1]="Nauman shahid"
guest_list[2]="Yasir hussain"

let newGuestList=[...guest_list]

console.log("\n*****new Guest list******\n")

for(let guestname of newGuestList){

    console.log(`${guestname}, initing them to dinner\n`)

}


