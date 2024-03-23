// Q41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magicines:string[]=["magince1","magince2","magince3","magince4"]

function show_magicians(magicines:string[]){

    magicines.forEach((magince)=>{

        console.log(magince)
    })


}


show_magicians(magicines)