const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

function setShape(input) {
    if (input.shape === 'Circle') {
        let inputShape = new Circle (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.shape === 'Triangle') {
        let inputShape = new Triangle (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.shape === 'Square') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    }
};

module.exports = setShape;