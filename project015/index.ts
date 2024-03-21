// Q16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// previus exercis code
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


// we found biger dinner table


console.log("\n*****we Found a bigger dinner table******\n")

let middle_of_array=Math.floor((newGuestList.length)/2)

newGuestList.unshift("muneeb")
newGuestList.splice(middle_of_array,0,'atiq ur rehman')
newGuestList.push("Aziz ur rehman")


for(let guestname of newGuestList){

    console.log(`${guestname}, initing them to dinner as we have a bigger dinner table\n`)

}













