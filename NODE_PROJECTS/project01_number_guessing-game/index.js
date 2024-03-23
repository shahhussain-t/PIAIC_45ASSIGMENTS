#! /usr/bin/env  node
import inquirer from "inquirer";
async function startGuessingGame() {
    let attempt = 0;
    let play = true;
    while (play) {
        let answers = await inquirer.prompt([
            { message: "Enter your Guess number between 1 - 6:", type: "number", name: "guessNumber" }
        ]);
        const randomNUmber = Math.floor(Math.random() * 6 + 1);
        if (answers.guessNumber === randomNUmber) {
            console.log(` you Guess the right number you won`);
            let answers = await inquirer.prompt([
                { choices: ["yes", 'no'], type: "list", message: "want to play again?", name: "Operator" },
            ]);
            if (answers.Operator === "yes") {
                play = true;
                attempt = 0;
            }
            else {
                play = false;
            }
        }
        else {
            attempt++;
            if (attempt === 3) {
                console.log('you losed the game better luck next time');
                let answers = await inquirer.prompt([
                    { choices: ["yes", 'no'], type: "list", message: "want to play again?", name: "Operator" },
                ]);
                if (answers.Operator === "yes") {
                    play = true;
                    attempt = 0;
                }
                else {
                    play = false;
                }
            }
            else {
                console.log("you guess the wrong number", 'chances left', 3 - attempt);
                play = true;
            }
        }
    }
}
startGuessingGame();
