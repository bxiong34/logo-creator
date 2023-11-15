const Shape = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

// test for shape
describe('Shape', () => {
    it('should set color of shape', () => {
      const shape = new Shape();
      shape.setColor("yellow");
      expect(shape.color).toEqual('yellow');
    });
  });

//test for circle shape
describe('Circle', () => {
    it('should render red circle', () => {
    const shape = new Circle();
    shape.setColor("red");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<circle width="300" height="200" cx="150" cy="100" r="80" fill="red"/><text x="40" y="35" class="heavy" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for triangle shape
describe('Triangle', () => {
    it('should render blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="blue"/><text x="40" y="35" class="heavy" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for square shape
describe('Square', () => {
    it('should render green square', () => {
    const shape = new Square();
    shape.setColor("green");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<rect width="300" height="200" fill="green"/><text x="40" y="35" class="heavy" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});
