// Require fs and util nodes
const fs = require("fs");
const util = require("util");
const axios = require("axios");

// Import prompts.js
const promptUser = require("./prompts.js");

// Setup up util.promisify
const writeFileAsync = util.promisify(fs.writeFile);

// Save user id
var savedUserID = "";

const queryUrl01 = "https://api.github.com/users/";
const queyrUrl02 = "/repos?per_page=100";

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

## Testing
${answers.testing} \n

## Return Something 
${getSomeThing02()} \n

## Questions
 - Contact ${answers.email} for questions \n
![](https://avatars3.githubusercontent.com/u/60083822?v=4.img) 
`;
}

function appendREADME(answers) {
  return `  
# Append Test
`;
}

function getSomeThing02() {
  return savedUserID;
}

function getSomething(username) {
  var avitar = "";

  // Retrieve data from gitHub
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=1`;
  console.log(queryUrl);

  axios
    .get(queryUrl)
    .then(function (response) {
      const repoNames = response.data.map(function (repo) {
        avitar = repo.owner.avatar_url;
        console.log(repo.owner.avatar_url);
        return avitar;
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log(avitar);
    });
}

async function init() {
  console.log("made it");

  try {
    const answers = await promptUser();
    // Create README.md
    await writeFileAsync("README.md", generateREADME(answers) + "\n");
    console.log("afterFileAsync = " + answers.userName);
    savedUserID = answers.userName;
    console.log(savedUserID);
  } catch (err) {
    console.log(err);
  }
}

init();
