// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is yot GitHub username?',
        name: 'gitUser'
    },
    {
        type: 'input',
        message: 'What is the name of this projects GitHub Repository? (Please be exact)',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {   type: 'input',
        message: 'Provide instructions for how users can reach you to ask additional questions',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your project (1-2 lines)',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide detailed installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide detailed usage instructions',
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please provide guidelines for how others can contribute",
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please provide information around testing of your application',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What license have you chosen for your project?',
        name: 'license',
        choices: [
            'Apache 2.0',
            'GNU General Public v3.0',
            'MIT',
            'BSD 2-Clause "Simplified" v3.0',
            'BSD 3-Clause "New"',
            'Boost Software 1.0',
            'Creative Commons Zero v1.0 Unviversal',
            'Eclipse Public 2.0',
            'GNUE Affero General Public v3.0',
            'GNU General Public v2.0',
            'GNU Lesser General Public v2.1',
            'Mozilla Public 2.0',
            'The Unlicense'
        ]
    }
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(ans){
        console.log({ans});
    })
}

init();
