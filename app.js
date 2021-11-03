// import modules
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'fullName',
                message: 'What is your full name?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your Github username?'
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:'
            }
        ])
};

const promptProject = () => {
    console.log(`
=================
Add a New Project
=================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
}

promptUser()
    .then(userAnswers => console.log(userAnswers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);
//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });