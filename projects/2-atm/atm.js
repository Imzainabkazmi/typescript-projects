#! /user/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Please enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter your Pin: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast cash", "Withdraw"],
        message: "Select your Transaction type ",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "Amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount ",
        when(answers) {
            return answers.transactionType == "Fast cash";
        }
    },
    {
        type: "number",
        name: "Amount",
        message: "Enter your amount ",
        when(answers) {
            return answers.transactionType == "Withdraw";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(`Your current balance is ${balance}`);
    const EnteredAmount = answers.Amount;
    if (EnteredAmount !== undefined) {
        if (balance >= EnteredAmount) {
            const remaining = balance - EnteredAmount;
            console.log(`Your remaining balance is ${remaining}`);
        }
        else {
            console.log("Insufficient funds!");
        }
    }
}
