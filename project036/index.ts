// Q37) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size:string,message:string){


    console.log(`The size of the T-shirt is ${size} and message should printed on T-Shirt is ${message}.`)
    
    
    }
    
    

function make_shirt_modified(size:string="large",message:string=' I love TypeScript.'){

    console.log(`The size of the T-shirt is ${size} and message should printed on T-Shirt is ${message}.`)
    

}

make_shirt_modified()

make_shirt_modified("medium")


make_shirt("medium","Coding is life.")