// Require fs and util nodes
const fs = require("fs");
const util = require("util");
const axios = require("axios");

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
${"```"}
${answers.installation} \n
${"```"}

## Usage
${answers.usage} \n

## License
${answers.license} \n

## Contributing
${answers.contributing} \n

## Questions
 - Contact ${answers.email} for questions \n
![](https://avatars3.githubusercontent.com/u/60083822?v=4.img) 
`;
}

function userData(answers) {
  //console.log(answers.userName);

  // Retrieve data from gitHub
  const queryUrl = `https://api.github.com/users/${answers.userName}/repos?per_page=1`;
  //console.log(queryUrl);

  axios
    .get(queryUrl)
    .then(function (response) {
      const repoNames = response.data.map(function (repo) {
        avitar = repo.owner.avatar_url;
        console.log("");

        console.log("Your gitHub Avatar = " + repo.owner.avatar_url);
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      //console.log(avitar);
    });
}

async function init() {
  try {
    const answers = await promptUser();

    await writeFileAsync("README.md", generateREADME(answers) + "\n");
    userData(answers);
  } catch (err) {
    console.log(err);
  }
}

init();
