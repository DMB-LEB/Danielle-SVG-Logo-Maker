const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

class SvgLogo{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="300" height="200"> ${this.shapeElement} ${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y= "150" text-anchor="middle" fill="${color}"> ${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render();
    }
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'characters',
      message: 'Please enter the characters you want to use for your logo, you may use up to three.',
    },
    {
      type: 'input',
      message: 'What color do you want the text to be?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'What shape do you want in your logo?',
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      message: 'What color do you want your shape to be?',
      name: 'shapeColor',
    },
])

.then((data) => {
  const filename = `logo.svg`;
  let createShape;

    if (data.shape === 'Circle') {
        createShape = new Circle(data.shapeColor);
    } else if (data.shape === 'Triangle') {
        createShape = new Triangle(data.shapeColor);
    } else if (data.shape === 'Square') {
        createShape = new Square(data.shapeColor);
    }

    const svg = new SvgLogo();
    svg.setShapeElement(createShape);
    svg.setTextElement(data.characters, data.textColor);
    console.log(svg);

  fs.writeFile(filename, svg.render(), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
  );
})
