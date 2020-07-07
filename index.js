const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

// connect to generateMarkdown js
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:"input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type:"input",
        message: "Write a brief description of your project",
        name: "description"
    },
    {
        type:"input",
        message: "Installation Information",
        name: "installation"
    },
    {
        type:"input",
        message: "What is the usage of your project?",
        name: "usage"
    },
    {
        type:"input",
        message: "License Information",
        name: "license"
    },
    {
        type:"input",
        message: "Contribution Guidelines",
        name: "contribution"
    },
    {
        type:"input",
        message: "Test Instructions",
        name: "tests"
    },
    {
        type:"input",
        message: "Questions?",
        name: "questions"
    },
    {
        type:"input",
        message: "What is your GitHub Username?",
        name: "gitHub"
    },
    {
        type:"input",
        message: "What is your e-mail?",
        name: "e-mail"
    }
];

// function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, generateMarkdown(data), (err) => err)
}

// function to initialize program
// function init() {
// }

async function init() {
    console.log("hi")
    try {
      const answers = await inquirer.prompt(questions);
  
      const generateMd = await generateMarkdown(answers);
      await writeToFile(`${answers.title}.md`, answers);
  
      console.log("Successfully wrote to md!");
    } catch(err) {
      console.log(err);
    }
  }

// function call to initialize program
init();
