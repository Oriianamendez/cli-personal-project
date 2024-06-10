#! /usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name",
    type: "string",
    demandOption: true,
  }).argv;

const greeting = chalk.white.bold(`Hello, ${options.name}! =)`);
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};

const mesBox = boxen(greeting, boxOptions);

console.log(mesBox);
