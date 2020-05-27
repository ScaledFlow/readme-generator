const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

let badges =
  "![APM](https://img.shields.io/apm/l/vim-mode) [![Build Status](https://travis-ci.com/ScaledFlow/readme-generator.svg?branch=master)](https://travis-ci.com/ScaledFlow/readme-generator)";

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter project title:",
      name: "Title",
    },
    {
      type: "input",
      message: "Enter project description:",
      name: "Description",
    },
    // {
    //   type: "input",
    //   message: "Enter installation notes:",
    //   name: "Installation",
    // },
    // {
    //   type: "input",
    //   message: "Enter usage notes:",
    //   name: "Usage",
    // },
    // {
    //   type: "input",
    //   message: "Enter License info:",
    //   name: "License",
    // },
    // {
    //   type: "input",
    //   message: "Enter contributers:",
    //   name: "Contributing",
    // },
    // {
    //   type: "input",
    //   message: "Enter testing info:",
    //   name: "Testing",
    // },
    // {
    //   type: "input",
    //   message: "Enter contributers",
    //   name: "Contributing",
    // },
    // {
    //   type: "input",
    //   message: "Enter questions:",
    //   name: "Questions",
    // },
  ]);
}

function generateREADME(answers) {
  return `test within generated`;
}

async function init() {
  console.log("made it");
  try {
    const answers = await promptUser();
    console.log(answers);
    console.log(answers.Title);
    const md = generateREADME(answers);
    console.log("generateREADME " + md);

    await writeFileAsync("README.md", generateREADME() + "\n");
    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
