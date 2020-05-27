// Require fs and util nodes
const fs = require("fs");
const util = require("util");

// Import prompts.js
const promptUser = require("./prompts.js");

// Setup up util.promisify
const writeFileAsync = util.promisify(fs.writeFile);

// Create badges linked to travis-ci.com
let badges =
  "![APM](https://img.shields.io/apm/l/vim-mode) [![Build Status](https://travis-ci.com/ScaledFlow/readme-generator.svg?branch=master)](https://travis-ci.com/ScaledFlow/readme-generator)";

// Create layout for README.md file
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

// Prompt users from the CLI for README info and generate a README.md file.
async function init() {
  console.log("made it");
  try {
    const answers = await promptUser();
    await writeFileAsync("README.md", generateREADME(answers) + "\n");
  } catch (err) {
    console.log(err);
  }
}

// Initialize program
init();
