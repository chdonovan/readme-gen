// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter the Project Title",
        },
        {   
            type: "input",
            name: "description",
            message: "Enter the Project Description",
        },
        {
            type: "input",
            name: "instalation",
            message: "Instalation instructions here",
        },
        {
            type: "input",
            name: "usage",
            message: "enter project usage info here",

        },
        {
            type: "input",
            name: "contributuon",
            message:"enter contribution instructions",
        },
        {
            type: "input",
            name: "testing",
            message: "enter testing info here",
        
        },
        {
            type: "list",
            name:"license",
            message: "Choose the appropriate License for your project",
            choices: [
                "Apache",
                "Acdemic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "enter your github username here",

        },
        {
            type: "input",
            name: "email",
            message: "enter your email address here"
        }
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
