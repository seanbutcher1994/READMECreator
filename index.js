// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUser'
    },
    {
        type: 'input',
        message: 'What is the name of this projects title? (Please copy and paste from GitHub)',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
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
            'Apache_2.0',
            'GNU_General_Public_v3.0',
            'MIT',
            'BSD_2_Clause "Simplified" v3.0',
            'BSD_3_Clause "New"',
            'Boost_Software_1.0',
            'Creative_Commons_Zero_v1.0_Unviversal',
            'Eclipse_Public_2.0',
            'GNUE_Affero_General_Public_v3.0',
            'GNU_General_Public_v2.0',
            'GNU_Lesser_General_Public_v2.1',
            'Mozilla_Public_2.0',
            'The_Unlicense'
        ]
    }
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(ans){
        console.log({ans});

        const readme = generateMarkdown(ans);
        const outputPath = path.join(__dirname, 'output', 'README.md');
        fs.writeFileSync(outputPath, readme, 'utf-8')
    })
}

init();
