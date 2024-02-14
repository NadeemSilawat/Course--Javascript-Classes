
class Squared{

    constructor(_width){
        this.width = _width;
        this.height = _width;

    }

    static equals (a,b){
        return a.width*a.height === b.width*b.height; 
    }

    static isValidDimensions(width,height){

        return width === height
    }
}

let squared1 = new Squared(8)
let squared2 = new Squared(8)


console.log(squared1);
console.log(Squared.equals(squared1,squared2));
console.log(Squared.isValidDimensions(4,2))


   

