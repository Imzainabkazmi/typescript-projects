#! /user/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the ZOMBIE Adventure Game!");
const play = {
    begin: () => {
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "You are in the middle of a Zombie Apocolypse. What are you going to do?",
                choices: ["Hide", "Run"],
            },
        ])
            .then((answer) => {
            if (answer.choice === "Hide") {
                play.hide();
            }
            else {
                play.run();
            }
        });
    },
    hide: () => {
        inquirer
            .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "You do not have food and resources. Do you want to go out to find them?",
            },
        ])
            .then((answer) => {
            if (answer.choice) {
                console.log("You successfully found a huge stash of supplies!");
            }
            else {
                console.log("You unfortunately DIED due to starvation.");
            }
            play.stop();
        });
    },
    run: () => {
        inquirer
            .prompt([
            {
                type: "list",
                name: "choice",
                message: "You come across a horde of zombies. Do you want to fight or run from it?",
                choices: ["Run", "Fight"],
            },
        ])
            .then((answer) => {
            if (answer.choice === "Run") {
                console.log("You found a military team that took you to a safe zone.");
            }
            else {
                console.log("You were KILLED by the zombies!");
            }
            play.stop();
        });
    },
    stop: () => {
        console.log("The game is over.");
    },
};
play.begin();
