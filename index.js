const inquirer = require('inquirer');

inquirer.prompt([
    {
        type:"input",
        message: "what is your name?",
        name: "userName"
    }
]).then (function(answers){
    console.log(answers);
})