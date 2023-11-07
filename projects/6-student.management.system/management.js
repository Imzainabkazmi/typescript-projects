#! /user/bin/env node
import inquirer from "inquirer";
let people = [];
const addPerson = async () => {
    const person = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Student name: ",
        },
        {
            type: "input",
            name: "age",
            message: "Enter Student age: ",
        },
        {
            type: "input",
            name: "class",
            message: "Enter Student class: ",
        },
    ]);
    people.push(person);
    options();
};
const viewPerson = () => {
    console.log("Student List: ");
    for (let person of people) {
        console.log(`- ${person.name} (Age: ${person.age}, Grade: ${person.class})`);
    }
    options();
};
const deletePerson = async () => {
    const { name } = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name of the Student to delete:",
        },
    ]);
    const index = people.findIndex((ppl) => ppl.name === name);
    if (index === -1) {
        console.log(`Student ${name} not found.`);
    }
    else {
        people.splice(index, 1);
        console.log(`Student ${name} deleted successfully!!`);
    }
    options();
};
const options = async () => {
    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Select an option:",
            choices: ["Add Student", "Delete Student", "View Student", "Exit"],
        },
    ]);
    switch (choice) {
        case "Add Student":
            addPerson();
            break;
        case "Add Student":
            addPerson();
            break;
        case "View Student":
            viewPerson();
            break;
        case "Delete Student":
            deletePerson();
            break;
    }
};
console.log("STUDENT MANAGEMENT SYSTEM");
options();
