const Shape = require('./shapes');

//class square
class Square extends Shape {
    constructor(text, textcolor, color) {
        super (text, textcolor, color); 
    };
    render() {
        return `<rect width="300" height="200" fill="${this.color}"/><text x="40" y="35" class="heavy" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Square;