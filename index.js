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
      name: "title",
    },
    {
      type: "input",
      message: "Enter project description:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation notes:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage notes:",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter License info:",
      name: "license",
    },
    {
      type: "input",
      message: "Enter contributers:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter testing info:",
      name: "testing",
    },
    {
      type: "input",
      message: "Enter questions:",
      name: "questions",
    },
  ]);
}

function generateREADME(answers) {
  return `  
# ${answers.title}
${badges} \n

## Description 
${answers.description} \n

## Installation
${answers.installation} \n

## Usage
${answers.usage} \n

## License
${answers.license} \n

## Contributing
${answers.contributing} \n

## Testing
${answers.testing} \n

## Questions
${answers.questions} \n

`;
}

async function init() {
  console.log("made it");
  try {
    const answers = await promptUser();
    await writeFileAsync("README.md", generateREADME(answers) + "\n");
  } catch (err) {
    console.log(err);
  }
}

init();
