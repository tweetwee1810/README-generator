// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//link to generaMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name:'Description',
        message: 'What is the project description',
    },

    {   
        type: 'input',
        name: 'Installation',
        message: 'What is your installation instructions?',

    },
    {   
        type: 'input',
        name: 'Usage',
        message: "what is the usage?",

    },
    {   
       type: 'input',
       name: 'Credits',
       message: 'Please list your collaborators (if any)?',

    },
    {   
        type: 'list',
        name: 'license',
        message: 'Choose the license?',
        choices: [
            "MIT",
            "Apache_2.0",
            "BSD_2.0",
            "BSD_3.0",
            "Eclipse_2.0",
            "GNU_2.0",
            "GNU_3.0",
            "Mozilla_2.0",
            "None"
        ],

    },
    {   
        type: 'input',
        name: 'Features',
        message: 'Is your project has a lot of features? List them here',

    },
    {   
        type: 'input',
        name: 'Tests',
        message: 'what are your tests for the project (if any)?',

    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github name?',
    },
       
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('file is successfully generated');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('ExampleREADME.md', generateMarkdown(response))
    })
    .catch ((error) => {
        console.error(error)
    })
}

// Function call to initialize app
init();
