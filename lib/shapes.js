class Shape {
    constructor(color){
        this.color = color
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="150" r="50" fill="${this.color}"/>`
    }
}

class Square{
    constructor(color){
        this.color = color
    }
    render(){
        return `<rect width="50" height="50" fill="${this.color}"/>`
    }
}

class Triangle{
    constructor(color){
        this.color = color
    }
    render(){
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Triangle, Square};