// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
  'What is your GitHub username?',
  'What is your email address?',
  'What is the name of this project?',
  'Please write a short description of your project',
  'What kind of license should your project have?',
  'What command should be run to install dependencies?',
  'What command should be run to run tests?',
  'What does the user need to know about using the repo?',
];
const licenseOptions = ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'];

// User inputs here.
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'gitHubName',
        message: questions[0],
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'input',
        name: 'email',
        message: questions[1],
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'input',
        name: 'projectName',
        message: questions[2],
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'input',
        name: 'decription',
        message: questions[3],
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'list',
        name: 'license',
        message: questions[4],
        choices: licenseOptions,
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'input',
        name: 'commandLine1',
        message: questions[5],
        default: "npm i",
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'input',
        name: 'commandLine2',
        message: questions[6],
        default: "npm test",
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
      {
        type: 'input',
        name: 'userguide',
        message: questions[7],
        validate: (value) => {if(value){return true} else {return 'Need a value to continue.'}}
      },
    ]);
};






// Bonus using writeFileAsync as a promise
const init = () => {
    promptUser()
      .then((res) => writeFileAsync('README-Generated.md', generateMarkdown(res)))
      .then(() => console.log('MD file Successfully generated.'))
      .catch((err) => console.error(err));
  };
  
  init();