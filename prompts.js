// Require inquirer - used for CLI user interface and session flow
const inquirer = require("inquirer");

// List of question the user is promptes with at the CLI
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter project title:",
      name: "title",
    },
    {
      type: "input",
      message: "Enter GitHub userName:",
      name: "userName",
    },
    {
      type: "input",
      message: "Enter GitHub repo:",
      name: "repo",
    },

    {
      type: "input",
      message: "Enter email:",
      name: "email",
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
      message: "Enter screen shot image name:",
      name: "screenshot",
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
  ]);
}

// Export module
module.exports = promptUser;
