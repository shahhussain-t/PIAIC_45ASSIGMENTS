// Q19) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



let guest_list:string[]=['shahwaiz Tahir','Manzar abbas','Maaz','Basit','ahmed']


for(let guestname of guest_list){

    console.log(`${guestname}, initing them to dinner`)
}


console.log(`\n******Number of guest we invited******\n`)

console.log(`Number of Guest we invited: ${guest_list.length}`)