#! /user/bin/env node
import * as inquirer from "inquirer";
import * as chalk from "chalk";


enum Operator {

Add = "Addition",
Subtract = "Subtraction",
Multiply = "Multiplication",
Divide = "Division"

}

const prompt = inquirer.createPromptModule();
function validateNumber(input:string ) : boolean | string
{
    if(isNaN(parseFloat(input))) {
        return "Please enter a valid Number"
    }
return true;
}
async function main()
{
  const input = await prompt([
{
    type:"input",
    name:"num1",
    message:"Please enter the first number: ",
    validate:validateNumber,
},
{type:"rawlist",
name:"operator",
message:"Please select an operator ",
choices:Object.values(Operator)
},
{type:"input",
name:"num2",
message:"Please enter the second number: ",
validate:validateNumber
}
])
const num1 = parseFloat(input.num1);
const num2 = parseFloat(input.num2);
let result : number;
const selectedOperator = input.operator as Operator;
if(selectedOperator===Operator.Add)
{result=num1+num2;
console.log((`Result is :${result}`));
}
else if(selectedOperator===Operator.Subtract)
{result=num1-num2;
console.log((`Result is :${result}`));
}
else if(selectedOperator===Operator.Multiply)
{result=num1*num2;
console.log((`Result is :${result}`));
}
else if(selectedOperator===Operator.Divide)
{result=num1/num2;
console.log((`Result is :${result}`));
}
}
    main()

