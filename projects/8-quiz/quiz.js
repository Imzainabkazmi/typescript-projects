#!/usr/bin/env node
import { exit } from 'process';
async function quiz() {
    const questions = [
        {
            question: "The number of ribs in a human body is: ",
            choice: ["24", "23", "15"],
            Answer: "24"
        },
        {
            question: " Which is the largest human cell?",
            choice: ["Spleen", "Skin", "Ovum"],
            Answer: "Ovum"
        },
        {
            question: "Which animal never drinks water in its entire life?",
            choice: ["Kangaroo", "Kangaroo rat", "Rat"],
            Answer: "Kangaroo rat"
        }
    ];
    let correct = 0;
    for (const question of questions) {
        const result = await ask(question);
        if (result) {
            correct++;
        }
    }
    console.log(`You got ${correct} out of ${questions.length} questions correct!`);
    exit();
}
async function ask(question) {
    console.log(question.question);
    for (let i = 0; i < question.choice.length; i++) {
        console.log(`${i + 1}: ${question.choice[i]}`);
    }
    const userChoice = await askInput(`Enter the number of your choice: `);
    if (question.choice[userChoice - 1] === question.Answer) {
        console.log("Correct!");
        return true;
    }
    else {
        console.log("Incorrect!");
        return false;
    }
}
async function askInput(prompt) {
    return new Promise((resolve, reject) => {
        process.stdin.resume();
        process.stdout.write(prompt);
        process.stdin.on("data", (data) => {
            resolve(data.toString().trim());
        });
    });
}
quiz();
