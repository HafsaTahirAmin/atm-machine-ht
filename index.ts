#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code
let myBalance = 50000;
let myPin= 12345;
// Print welcome message
console.log(chalk.blue("\n \t Welcome to Life of Hafsa - ATM Machine\n\t"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.yellow("Enter your pin code:"))
    }
])
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\n Pin is Correct, Login Successfully!\n"));
 console.log(chalk.red(`Current Account Balance is ${myBalance}`));
}
if(pinAnswer.pin != myPin){
    console.log(chalk.red("\n Pin is Incorrect, Try Again!\n"));
}
    let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["withDraw Amount", "Check your balance"]
        }
    ])

if(operationAns.operation === "withDraw Amount"){
  let withDrawAns = await inquirer.prompt([
    {
  name: "withDrawMethod",
  type: "list",
  message: "Select a withDrawal method:",
  choices: ["Fast Cash", "Enter Amount"]
    }
])
if(withDrawAns.withDrawMethod === "Fast Cash"){
    let fastCashAns = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            message: "Select Amount:",
            choices: [1000, 2000, 5000, 10000, 20000, 50000]
        }
    ])
    if(fastCashAns.fastCash > myBalance){
        console.log(chalk.red("InSufficient Balance"));
    }
    else{
        myBalance -= fastCashAns.fastCash
        console.log(`${fastCashAns.fastCash} withDraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }
}
else if(withDrawAns.withDrawMethod === "Enter Amount") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withDraw:"
        }
    ])

    if(amountAns.amount > myBalance) {
        console.log(chalk.red("Insufficient Balance"));
    }
    else{
        myBalance -= amountAns.amount;
        console.log(chalk.yellow`${amountAns.amount} withDraw Successfully`);
        console.log(chalk.blue(`Your Remaining balance is: ${myBalance}`))
    }
}
    }
    else if(operationAns.operation === "check balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    }
