//MAIN CLASS - oop.ts

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function main(): Promise<void> {
  try {
    let input: string;
    let name: string;

    input = await askQuestion("Type 1 if you like to others and type 2 if you rather keep to yourself: ");
    const MyPerson = new Person();
    MyPerson.AskQuestion(parseInt(input));
    console.log("You are: " + MyPerson.GetPersonality());

    name = await askQuestion("What is your name: ");
    const MyStudent = new Student();
    MyStudent.Name = name;

    console.log("Your name is: " + MyStudent.Name + " and your personality is: " + MyStudent.GetPersonality());

    rl.close();
  } catch {
    console.log("Please enter an integer value");
  }
}

main();

//person.ts

class Person {
  // Declaring a field to represent the personality
  private personality: string;

  // Constructor
  constructor() {
      this.personality = "mystery";
  }

  public AskQuestion(answer: number): void {
      if (answer === 1) {
          this.personality = "Extrovert";
      } else if (answer === 2) {
          this.personality = "Introvert";
      } else {
          this.personality = "You are still a mystery";
      }
  }

  public GetPersonality(): string {
      return this.personality;
  }
}


//student.ts


class Student extends Person {
  private _name: string;

  constructor() {
      super();
      this._name = "";
  }

  public get Name(): string {
      return this._name;
  }

  public set Name(value: string) {
      this._name = value;
  }
};