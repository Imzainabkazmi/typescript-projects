#! /user/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let genNum = Math.floor(Math.random() * 2);
let user = await inquirer.prompt({
    name: "numb1",
    type: "list",
    message: "Please select the number: ",
    choices: ["0", "1"],
});
if (genNum == parseInt(user.numb1)) {
    console.log(chalk.bold.blueBright("Congratulations! YOU WIN"));
}
else {
    console.log(chalk.bold.redBright("TRY AGAIN!"));
}
;
