// TODO: Include packages needed for this application
const fs=require("fs")
const inquirer=require("inquirer")
const path=require("path")
const generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "subject",
        message: "what is the name of your project?"
    },
    {
        type: "input",
        name: "username",
        message: "What's your username on GitHub?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of the project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provite installation instructions.",
    },
    { 
        type: "list",
        name: "license",
        message: "Which license does your project use?",
        choices: ["MIT", "Apache", "GPL", "BSD", "NONE"]
    },
    {
        type: "input",
        name: "contributors",
        message: "List anyone who contributed to the project here.",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "questions",
        message: "Feel free to include any questions you have about the project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter testing requirements for the project",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage requirements for the project",
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
     fs.writeFileSync(fileName, data,function(err){
        if(err) throw err;
     })
     console.log("Markdown generated!")
}

// TODO: Create a function to initialize app
function init() 
{
    inquirer.prompt(questions).then(Response => {
        return generateMarkdown(Response)
    }).then(data => {
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
