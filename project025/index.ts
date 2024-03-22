// Q26)Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.
// version that run if block
let alien_color:string="green"


console.log("\n*******version that runs if block******\n")
if(alien_color==="green"){

    console.log("player just earned 5 points.")
}else{

    
    console.log("player just earned 10 points.")
}


// 2nd versoin that run else block
console.log("\n*******version that runs else block******\n")
alien_color="yellow"
if(alien_color==="green"){

    console.log("player just earned 5 points.")
}else{

    
    console.log("player just earned 10 points.")
}





