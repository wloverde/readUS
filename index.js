// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
// array that in input into inquirer.prompt() for terminal input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is your Repository Name?',
    },
    {
        type: 'input',
        message: 'Please give a brief description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the Installation Process to run the program?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is your github profile URL?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What License would you like to use?',
        name: 'license',
        choices: ['none', 'mit', 'gitignore', 'google'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
