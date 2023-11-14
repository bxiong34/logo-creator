// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js');
console.log('Answer all the questions to create a logo!');

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

function writeFile() {
    fs.writeFile((err) => {
        if (input = "") {
            return console.log('Please make sure you complete all sections.');
        } else {
        console.log('logo');
        }
    })
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
   .then((input) => {
        console.log(input);
    const SVG = `<${this.shape}svg width="300" height="200" fill="${this.color}" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;

    fs.writeFile('./examples/logo.svg', SVG);
    
    if (input = "") {
        return console.log('Please answer all questions to create a logo.');
    } else {
    console.log('Generated logo.svg');
    }
   });
};

// Function call to initialize app
init();
