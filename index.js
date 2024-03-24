#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    {
        message: "Enter Your Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select One The Operator To Perfom Action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Your answer is", answer.FirstNumber + answer.secondNumber, "by Muhammad Suleman");
}
else if (answer.operator === "Subtraction") {
    console.log("Your answer is", answer.FirstNumber - answer.secondNumber, "by Muhammad Suleman");
}
else if (answer.operator === "Division") {
    console.log("Your answer is", answer.FirstNumber / answer.secondNumber, "by Muhammad Suleman");
}
else if (answer.operator === "Multiplication") {
    console.log("Your answer is", answer.FirstNumber * answer.secondNumber, "by Muhammad Suleman");
}
else {
    console.log("Please select a valid opreator");
}
