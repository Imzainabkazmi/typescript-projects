//MAIN CLASS - oop.ts
import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}
async function main() {
    try {
        let input;
        let name;
        input = await askQuestion("Type 1 if you like to others and type 2 if you rather keep to yourself: ");
        const MyPerson = new Person();
        MyPerson.AskQuestion(parseInt(input));
        console.log("You are: " + MyPerson.GetPersonality());
        name = await askQuestion("What is your name: ");
        const MyStudent = new Student();
        MyStudent.Name = name;
        console.log("Your name is: " + MyStudent.Name + " and your personality is: " + MyStudent.GetPersonality());
        rl.close();
    }
    catch {
        console.log("Please enter an integer value");
    }
}
main();
//person.ts
class Person {
    // Constructor
    constructor() {
        this.personality = "mystery";
    }
    AskQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a mystery";
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
//student.ts
class Student extends Person {
    constructor() {
        super();
        this._name = "";
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
;
