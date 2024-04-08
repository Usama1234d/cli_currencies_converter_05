#! /usr/bin/env node 

// Importing Inuqirer 
import inquirer from "inquirer";
// Importing chalk 
import chalk from "chalk";

let continueConverting = true;
// Five currencies conversion objects

while (continueConverting) {
  let currencyConversion = {
    PKR: {
      USD: 0.0036,
      GBP: 0.0028,
      PKR: 1,
      AED: 0.094,
      SAR: 0.026,
    },
    GBP: {
      USD: 1.26,
      GBP: 1,
      PKR: 350.76,
      AED: 0.094,
      SAR: 0.026,
    },
    USD: {
      USD: 1,
      GBP: 0.79,
      PKR: 277.54,
      AED: 0.094,
      SAR: 0.026,
    },
    AED: {
      USD: 1,
      GBP: 0.79,
      PKR: 277.54,
      AED: 0.094,
      SAR: 0.026,
    },
    SAR: {
      USD: 1,
      GBP: 0.79,
      PKR: 277.54,
      AED: 0.094,
      SAR: 0.026,
    },
  };
  // prompt user for input

  const answer: {
    from: "PKR" | "GBP" | "USD" | "AED" | "SAR";
    to: "PKR" | "GBP" | "USD" | "AED" | "SAR";
    amount: number;
  } = await inquirer.prompt([
    {
      type: "list",
      name: "from",
      message: chalk.bgGreenBright("From which currency?"),
      choices: ["PKR", "GBP", "USD", "AED", "SAR"],
    },

    {
      type: "list",
      name: "to",
      message: chalk.yellowBright("Please select your conversion rate"),
      choices: ["PKR", "GBP", "USD", "AED", "SAR"],
    },
    {
      type: "number",
      name: "amount",
      message: chalk.bgBlueBright(
        "Please enter the amount you wish to convert"
      ),
    },
  ]);

  // Destructuring user input
  const { from, to, amount } = answer;

  // Perform currency conversion
  if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(
      chalk.redBright(
        `your conversion from ${from} to ${to} is ${result.toFixed(2)}`
      )
    );
  } else {
    console.log(
      chalk.bgRedBright(
        "invalid conversion. Make sure you have entered correct currency"
      )
    );
  }

  // Ask if the user wants to continue
  const continueOperation = await inquirer.prompt({
    type: "confirm",
    message: chalk.bgMagentaBright(
      "Would you like to perform another conversion"
    ),
    name: "continue",
    default: true,
  });

  // Updating
  continueConverting = continueOperation.continue;
}
console.log(chalk.bgGreen("Thank you for using currency converter!"));
