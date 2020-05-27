const fs = require("fs");
// const inquirer = require("inquirer");
const util = require("util");
const promptUser = require("./prompts.js");

const writeFileAsync = util.promisify(fs.writeFile);

let badges =
  "![APM](https://img.shields.io/apm/l/vim-mode) [![Build Status](https://travis-ci.com/ScaledFlow/readme-generator.svg?branch=master)](https://travis-ci.com/ScaledFlow/readme-generator)";

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
