const Shape = require('./shapes');

//class triangle 
class Triangle extends Shape {
    constructor(text, textcolor, color) {
        super (text, textcolor, color); 
    };
    render() {
        return `<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="40" y="35" class="heavy" fill="${this.textcolor}">${this.text}</text>`
    }
}

module.exports = Triangle;
