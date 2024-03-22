//Q27)Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.



let alien_color:string="green"


console.log("\n*******1st version ******\n")
if(alien_color==="green"){

    console.log("player just earned 5 points.")
}else if(alien_color==="yellow"){

    
    console.log("player just earned 10 points.")
}else if(alien_color==="red"){

    
    console.log("player just earned 15 points.")
}


// 2nd versoin 
alien_color="yellow"
console.log("\n*******2nd version ******\n")
if(alien_color==="green"){

    console.log("player just earned 5 points.")
}else if(alien_color==="yellow"){

    
    console.log("player just earned 10 points.")
}else if(alien_color==="red"){

    
    console.log("player just earned 15 points.")
}


// 3rd versoin 
alien_color="red"
console.log("\n*******3rd version ******\n")
if(alien_color==="green"){

    console.log("player just earned 5 points.")
}else if(alien_color==="yellow"){

    
    console.log("player just earned 10 points.")
}else if(alien_color==="red"){

    
    console.log("player just earned 15 points.")
}

