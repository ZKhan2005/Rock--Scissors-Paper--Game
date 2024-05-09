#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function startGame() {
    const playerResponse = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: chalk.bold.bgCyanBright('*-*-*-*  Choose Rock, Paper, or Scissors:  *-*-*-*'),
        choices: ["Rock", "Paper", "Scissors"]
    });
    const opponentChoices = ["Rock", "Paper", "Scissors"];
    const opponentResponse = opponentChoices[Math.floor(Math.random() * 3)];
    console.log(chalk.bold.bgMagentaBright(`*-*-*-* Opponent chose: ${opponentResponse} *-*-*-*`));
    const result = compare(playerResponse.choice, opponentResponse);
    console.log(chalk.bold.yellow(result));
}
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return chalk.bgYellowBright("-*-*-* It's a draw! -*-*-*");
    }
    else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return "Rock wins!";
        }
        else {
            return "Paper wins!";
        }
    }
    else if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Paper wins!";
        }
        else {
            return "Scissors win!";
        }
    }
    else if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            return "Rock wins!";
        }
        else {
            return "Scissors win!";
        }
    }
    else {
        return "-*_*_*_* Invalid choice. Please choose Rock, Paper, or Scissors.";
    }
}
startGame();
