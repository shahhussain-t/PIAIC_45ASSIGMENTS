#! /usr/bin/env  node


import inquirer from "inquirer";
import chalk from 'chalk';
const log = console.log;

const answer= await inquirer.prompt([

    {name:"firstNumber",type:"number",message:"Enter first Number"},
    {name:"secondNumber",type:"number",message:"Enter second Number"},
    {choices:["Addition",'Subtraction',"Multplication","Division"],type:"list",message:"Select The operator",name:"Operator"},
])


const {firstNumber,secondNumber,Operator}=answer

switch(Operator){

    case "Addition":
        log(chalk.blue(`

            ${firstNumber}`)
            + 
            
            chalk.red(` + `)

            +
            
            chalk.blue(`${secondNumber}`)

            +
            
            chalk.yellow(` = `)

            +
            chalk.green(`${firstNumber + secondNumber} `)
            )
        
        
        
        
        break;
    case "Subtraction":
        log(chalk.blue(`

        ${firstNumber}`)
        + 
        
        chalk.red(` - `)

        +
        
        chalk.blue(`${secondNumber}`)

        +
        
        chalk.yellow(` = `)

        +
        chalk.green(`${firstNumber - secondNumber} `)
        )
    
        break;
    case "Multplication":
        log(chalk.blue(`

        ${firstNumber}`)
        + 
        
        chalk.red(` * `)

        +
        
        chalk.blue(`${secondNumber}`)

        +
        
        chalk.yellow(` = `)

        +
        chalk.green(`${firstNumber * secondNumber} `)
        )
    
        break;
    case "Division":
        log(chalk.blue(`

        ${firstNumber}`)
        + 
        
        chalk.red(` / `)

        +
        
        chalk.blue(`${secondNumber}`)

        +
        
        chalk.yellow(` = `)

        +
        chalk.green(`${firstNumber / secondNumber} `)
        )
    
        break;
    default:
        console.log(`ENter a valid number or select a valid operator`)
    


}