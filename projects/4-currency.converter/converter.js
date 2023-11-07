#!/usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0034,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.22,
        "PKR": 353.43,
        "GBP": 1
    },
    "USD": {
        "PKR": 290.50,
        "GBP": 0.82,
        "USD": 1
    }
};
const questions = [
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your conversion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: "
    }
];
const answers = await inquirer.prompt(questions);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}.`);
}
else {
    console.log("Invalid inputs.");
}
