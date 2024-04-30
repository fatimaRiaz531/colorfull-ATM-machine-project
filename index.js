import inquirer from "inquirer";
import chalk from "chalk";
// initialize user balance and pin code
let myBalance = 6000;
let myPin = 1234;
console.log(chalk.blue.bold.italic("\n \twelcome to Code-With-Fatima-ATM-Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin is correct, Login Successfully!\n"));
    // console.log(`Current Account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Ammount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdraw1 method:",
                choices: ["Fast Cash", "Enter Ammount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 3000, 40000, 50000]
                }
            ]);
            if (fastCashAns.fastcash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastcash;
                console.log(`${fastCashAns.fastcash} withdraw Successfully`);
                console.log(`Your Remaing Balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Ammount") {
            let ammountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.red("Enter the amount to withdraw:")
                }
            ]);
            if (ammountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= ammountAns.amount;
                console.log(`${ammountAns.amount} Withdraw Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(` Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.bgBlue("\n\tPin is Incorrect, Try Again!\n"));
}
