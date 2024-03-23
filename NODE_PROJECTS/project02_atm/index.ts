#! /usr/bin/env  node

import inquirer from "inquirer";

import userData from './userData.json' assert {type: 'json'}



async function main() {

    let display: boolean = true
    let answers = await inquirer.prompt([

        { message: 'Enter your 6 Digit userId:', type: "number", name: "userId" },
        { message: 'Enter your 4 Digit userPin:', type: "text", name: "userPin" }


    ])

    while (display) {

        const findUser = await userData.find(data => data.userID === answers.userId && data.userPin === answers.userPin)

        if (findUser === undefined) {

            console.log("You Enter the wrong userid or userPin")

            answers = await inquirer.prompt([

                { message: "Want to try again?", type: 'list', choices: ["yes", "no"], name: "tryAgain" }

            ])


            if (answers.tryAgain === "yes") {

                display = true
                answers = await inquirer.prompt([

                    { message: 'Enter your 6 Digit userId:', type: "number", name: "userId" },
                    { message: 'Enter your 4 Digit userPin:', type: "text", name: "userPin" }


                ])


            } else {

                display = false

            }

        } else {

            let bal: number = 0;
            console.log("You login succesfull")

            answers = await inquirer.prompt([

                { message: "Select what's want you want to do?", type: 'list', choices: ["Deposit Balance", "Witdraw Balance", "Check Balance", "Exit"], name: "option" }

            ])


            switch (answers.option) {
                case "Deposit Balance":
                    answers = await inquirer.prompt([
                        { message: 'How much you want to deposit?', type: "number", name: "deposit" }

                    ])
                    bal += answers.deposit
                    console.log(` We deposited ${answers.deposit} \n Know your Total balance is ${bal + findUser.balance}`)
                    console.log("Depostied balance succesfull")
                    answers = await inquirer.prompt([
                      { message: "Want to perform another transcation?", type: 'list', choices: ["yes", "no"], name: "depositoption" }

                    ])

                    if (answers.depositoption === "yes") {
                        answers = await inquirer.prompt([

                            { message: 'How much you want to deposit?', type: "number", name: "deposit" }
                        ])

                        bal += answers.deposit

                        console.log(` We deposited ${answers.deposit} \n Know your Total balance is ${bal + findUser.balance}`)

                        console.log("Depostied balance succesfull")

                        answers = await inquirer.prompt([

                            { message: "Want to perform another transcation?", type: 'list', choices: ["yes", "no"], name: "depositoption" }

                        ])

                        display = false

                    } else {

                        display = false

                    }

                    break

               case "Witdraw Balance":
                    answers = await inquirer.prompt([

                        { message: 'How much you want to withdraw?', type: "number", name: "withdraw" }
                    ])

                    if (answers.withdraw > findUser.balance) {

                        console.log("Low balance your current balance is", findUser.balance)
                        answers = await inquirer.prompt([

                            { message: "Select what's want you want to do?", type: 'list', choices: ["Deposit Balance", "Witdraw Balance", "Check Balance", "Exit"], name: "option" }

                        ])

                        display = false
                    } else {

                        bal += answers.withdraw

                        console.log(` We withdraw ${answers.deposit} \n Know your Total balance is ${bal - findUser.balance}`)

                        console.log("Withdraw balance succesfull")

                        answers = await inquirer.prompt([

                            { message: "Want to perform another transcation?", type: 'list', choices: ["yes", "no"], name: "depositoption" }

                        ])

                        if (answers.depositoption === "yes") {
                            answers = await inquirer.prompt([

                                { message: 'How much you want to withdraw?', type: "number", name: "withdraw" },



                            ])

                            bal += answers.withdraw

                            console.log(` We withdraw ${answers.deposit} \n Know your Total balance is ${bal - findUser.balance}`)

                            console.log("withdraw balance succesfull")

                            answers = await inquirer.prompt([

                                { message: "Want to perform another transcation?", type: 'list', choices: ["yes", "no"], name: "depositoption" }

                            ])


                            display = false

                        } else {

                            display = false

                        }

                    }
                    break
                case "Check Balance":
                    console.log(`Your current  balance is ${findUser.balance}`)
                    display = false
                    break
                case "Exit":
                    console.log(`you are logeout`)
                    display = false
                    break
                default:
                    console.log("Something goes worng")
                    display = false

            }
        }
    }
}



main()
