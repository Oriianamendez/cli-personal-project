#! /usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Hello World! =)");
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};
const mesBox = boxen(greeting, boxOptions);

console.log(mesBox);
