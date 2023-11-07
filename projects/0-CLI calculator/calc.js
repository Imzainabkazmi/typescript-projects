#! /user/bin/env node
import * as inquirer from "inquirer";
var Operator;
(function (Operator) {
    Operator["Add"] = "Addition";
    Operator["Subtract"] = "Subtraction";
    Operator["Multiply"] = "Multiplication";
    Operator["Divide"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid Number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number: ",
            validate: validateNumber,
        },
        { type: "rawlist",
            name: "operator",
            message: "Please select an operator ",
            choices: Object.values(Operator)
        },
        { type: "input",
            name: "num2",
            message: "Please enter the second number: ",
            validate: validateNumber
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    let result;
    const selectedOperator = input.operator;
    if (selectedOperator === Operator.Add) {
        result = num1 + num2;
        console.log((`Result is :${result}`));
    }
    else if (selectedOperator === Operator.Subtract) {
        result = num1 - num2;
        console.log((`Result is :${result}`));
    }
    else if (selectedOperator === Operator.Multiply) {
        result = num1 * num2;
        console.log((`Result is :${result}`));
    }
    else if (selectedOperator === Operator.Divide) {
        result = num1 / num2;
        console.log((`Result is :${result}`));
    }
}
main();
