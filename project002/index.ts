
// Q3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="Shah hussain"

let lowerCaseName:string=personName.toLowerCase()
let upperCaseName:string=personName.toUpperCase()
let titleCaseName:string=personName.split(' ').map(name=>name[0].toUpperCase() +name.slice(1).toLowerCase()).join(' ')

console.log(`Name in lowercase ${lowerCaseName}.`)
console.log(`Name in uppercase ${upperCaseName}.`)
console.log(`Name in titlecase ${titleCaseName}.`)