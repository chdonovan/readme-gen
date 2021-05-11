// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
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
// promptUser();
// async promise and app initialization
async function init(){
    try{
        //ask user questions
        const asnwers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // writes a new readme file to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('readme generated succesfully');
    }   catch(err){
            console.log(err);
        }


    }
// initializes app
init();



