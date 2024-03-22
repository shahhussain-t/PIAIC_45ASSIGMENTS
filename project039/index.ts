// Q40) Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface Album{

    artistName:string,
    albumTitle:string
    tracks?:number
}

function make_album(artistName:string,albumTitle:string,tracks?:number){

    let album:Album={

        artistName,
        albumTitle

    }

    if(tracks !==undefined){
        album.tracks=tracks
    }

    return album

}


const dictionarie1 = make_album("Luna Belle","Midnight Serenade")
const dictionarie2= make_album("Echo Rivers","Whispering Echoes")
const dictionarie3= make_album("Solstice Dreamers","Celestial Symphony")
const dictionarie4= make_album("Solstice Dreamers","Celestial Symphony",10)
const dictionarie5= make_album("Solstice Dreamers","Celestial Symphony",9)


console.log(`dictionarie1 = `,dictionarie1)
console.log(`dictionarie2 = `,dictionarie2)
console.log(`dictionarie3 = `,dictionarie3)
console.log(`dictionarie4 = `,dictionarie4)
console.log(`dictionarie4 = `,dictionarie5)


