const Shape = require('./shapes');

//class circle
class Circle extends Shape {
    constructor(text, textcolor, color) {
        super (text, textcolor, color); 
    };
    render() {
        return `<circle width="300" height="200" cx="150" cy="100" r="80" fill="${this.color}"/><text x="40" y="35" class="heavy" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Circle;