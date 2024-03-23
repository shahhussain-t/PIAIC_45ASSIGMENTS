// Q42) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magicines:string[]=["magince1","magince2","magince3","magince4"]

function show_magicians(magicines:string[]){

    magicines.forEach((magince)=>{

        console.log(magince)
    })


}


function make_great(magicines:string[]){

   
    for(let i=0;i<magicines.length;i++){

        magicines[i] =" The Great "+magicines[i]

        console.log(magicines[i])


    }


}


console.log("\nList of magicians before modification:\n");

show_magicians(magicines)


console.log("\nList of magicians when modification:\n");
make_great(magicines)


console.log("\nList of magicians after modification:\n");

show_magicians(magicines)