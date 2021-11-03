// import modules
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name?'
    }
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw new Error(err);
//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });