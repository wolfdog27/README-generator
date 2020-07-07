const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");



inquirer.prompt([
    {
        type:"input",
        message: "What is the Title of your project?",
        name: "Title"
    },
    {
        type:"input",
        message: "Write a brief description of your project",
        name: "Description"
    },
    {
        type:"input",
        message: "Table of Contents",
        name: "Table of Contents"
    },
    {
        type:"input",
        message: "Installation Information",
        name: "Installation"
    },
    {
        type:"input",
        message: "What is the usage of your project?",
        name: "Usage"
    },
    {
        type:"input",
        message: "License Information",
        name: "License"
    },
    {
        type:"input",
        message: "Contribution Guidelines",
        name: "Contribution"
    },
    {
        type:"input",
        message: "Test Instructions",
        name: "Tests"
    },
    {
        type:"input",
        message: "Questions?",
        name: "Questions"
    },
    {
        type:"input",
        message: "What is your GitHub Username?",
        name: "GitHub"
    },
    {
        type:"input",
        message: "What is your e-mail?",
        name: "E-mail"
    }
]).then (function(answers){
    console.log(answers);
})


// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
