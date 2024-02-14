

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic Animal Sound !!");
    }


}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        super.makeSound()
        console.log('woof, woof !!');
    }
}


let a1 = new Animal("Dom");
let a2 = new Dog("fom");


// console.log(a1);
// console.log(a2);
// console.log(a1.makeSound());
// console.log(a2.makeSound());


console.log(a2.makeSound());