// Q44) Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function wantSandwiches(...sanwiches:string[]){


    let summary:string="";
    sanwiches.forEach((sandwich)=>{


        summary +=sandwich +"\n"


    })


   console.log(summary+ "You order above sandwiches")


}


console.log("\nfirst time \n")

wantSandwiches("sandwich1","sandwich2","sandwich3")

console.log("\n2nd time \n")
wantSandwiches(
    "BLT (Bacon, Lettuce, Tomato)",
    "Club Sandwich",
    "Reuben Sandwich",
    "Grilled Cheese Sandwich",
    "Italian Submarine Sandwich"

)


console.log("\n3rd time \n")

wantSandwiches(
    "Turkey and Swiss Sandwich",
    "Philly Cheesesteak Sandwich",
    "Chicken Caesar Wrap",
    "Monte Cristo Sandwich",
    "Caprese Panini",
    "Pulled Pork Sandwich"
)