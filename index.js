var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
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
    {
      type: "input",
      message: "Enter installation notes:",
      name: "Installation",
    },
    {
      type: "input",
      message: "Enter usage notes:",
      name: "Usage",
    },
    {
      type: "input",
      message: "Enter License info:",
      name: "License",
    },
    {
      type: "input",
      message: "Enter contributers:",
      name: "Contributing",
    },
    {
      type: "input",
      message: "Enter testing info:",
      name: "Testing",
    },
    {
      type: "input",
      message: "Enter contributers",
      name: "Contributing",
    },
    {
      type: "input",
      message: "Enter questions:",
      name: "Questions",
    },
  ])
  .then(function (response) {
    console.log(response.Questions);

    let buildTitle = "# " + response.Title;

    fs.writeFile("README.md", buildTitle, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("README Created!");
    });
  });
