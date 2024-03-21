// Q17) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.




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





console.log("\n*****we Found a bigger dinner table******\n")

let middle_of_array=Math.floor((newGuestList.length)/2)

newGuestList.unshift("muneeb")
newGuestList.splice(middle_of_array,0,'atiq ur rehman')
newGuestList.push("Aziz ur rehman")


for(let guestname of newGuestList){

    console.log(`${guestname}, initing them to dinner as we have a bigger dinner table\n`)

}



// online can invite two people for dinner


console.log("\n*****we can only invite two people for dinner******\n")


for(let i=0;newGuestList.length;i++){

  

    if(newGuestList.length >2){

        let removeguest=newGuestList.pop()

         console.log(`${removeguest} sorry we can’t invite you to dinner`)
    }else{
        break
    }



}


console.log("\n*****Guest who still invited******\n")

for(let guestname of newGuestList){

    console.log(`${guestname}, you are still invited\n`)

}


console.log("\n*****Empty guest list******\n")



for(let i=0;newGuestList.length;i++){

  
      newGuestList.pop()


}



console.log(`Guest list: `,newGuestList)




















