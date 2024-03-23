// Q43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let magicines:string[]=["magince1","magince2","magince3","magince4"]

function show_magicians(magicines:string[]){

    magicines.forEach((magince)=>{

        console.log(magince)
    })


}


function make_great(magicines:string[]){

   
   
    for(let i=0;i<magicines.length;i++){

        magicines[i] =" The Great "+magicines[i]

        
        


    }

    return magicines

}


const newmagincearray=make_great([...magicines])



console.log("\ncall the function with new return array\n")
show_magicians(newmagincearray)


console.log("\norginal array remani unchanged\n")
show_magicians(magicines)



