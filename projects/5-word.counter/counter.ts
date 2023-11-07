#! /user/bin/env node

import inquirer from "inquirer";
const answers : {
    Sentence : string
} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter the input to count the words: "
    }
])
const words = answers.Sentence.trim().split(" ")
console.log(`The total amount of words here is: ${words.length}`)
