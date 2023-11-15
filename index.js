// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const setShape = require('./lib/setShape.js');
const fileName = './examples/logo.svg';


console.log('Answer all the questions to create a logo!');

//prompt to create logo
const questions = [
    {
      type: 'input',
      message: 'Enter a three character logo name.',
      name: "text",
      validate: input => input.length < 4,
    },
    {
      type: 'input',
      message: 'What do you want the text color to be?',
      name: 'textcolor',
    },
    {
      type: 'list',
      message: 'What shape do you want your logo to have?',
      name: "shape",
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      message: 'What do you want the shape color to be?',
      name: 'color',
    }, 
  ];

//function to create logo
function createLogo(input) {
    const svg = setShape(input);
    fs.writeFile(fileName, svg, "UTF-8", () => {
        console.log('Generated logo.svg');
    })
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
   .then((input) => {
        createLogo (input);
   })
   .catch(err =>{
        console.log(err);
   });
}

init();