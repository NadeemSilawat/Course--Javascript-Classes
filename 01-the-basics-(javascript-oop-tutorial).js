

/*
    Class -> Object

    Instance Properties : what they have
        -name
        -age
        -height



    Instance Methos : What they do 
        -taik
        -run
        -jump
*/


class Rectangle {

    //Setup
    constructor(_width, _height, _color) {
        console.log('The Rectangle is being created!')

        this.width = _width;
        this.height = _height;
        this.color = _color;

    }

    getArea() {
        return this.width + this.height
    }

    printDescription(){
        console.log(`I am a rectangle of  ${this.width} x ${this.height} andf I am ${this.color}` );
    }
}

let myRectangle1 = new Rectangle(5, 3, 'Blue');
let myRectangle2 = new Rectangle(45, 35, 'green');

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

console.log(myRectangle1.printDescription());
console.log(myRectangle2.printDescription());

