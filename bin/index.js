#! /usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const options = yargs.usage("Usage: -n <name>").option("n", {
  alias: "name",
  describe: "Your name",
  type: "string",
  demandOption: true,
}).argv;

const various = yargs.usage("Usage: -h <hobbie>").option("h", {
  alias: "hobbie",
  describe: "Your hobbie",
  type: "string",
  demandOption: true,
}).argv;

const greeting = chalk.white.bold(
  `Hello, ${options.name}! If you are tired, you should go/play \n${various.hobbie}.`
);
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "#8b008b",
  backgroundColor: "magenta",
};

const mesBox = boxen(greeting, boxOptions);

console.log(mesBox);
