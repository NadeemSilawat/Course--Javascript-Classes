
//Parent and Child Class

class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearOfExperience) {

        super(_name, _age);

        //Custom behaviour
        this._yearOfExperience = _yearOfExperience;
    }

    code() {
        console.log(`${this.name} is Coder`);
    }

}

const programmers = [
    new Programmer("dom", 33, 4),
    new Programmer("steff", 23, 5)
]

function devlopeSoftware(programmers) {
    //Devlop Software
    for (let programmer of programmers) {
        programmer.code();
    }
}

devlopeSoftware(programmers)





let person1 = new Person("John", 23);
let programmer1 = new Programmer("John", 23, 2);

programmer1.code()
programmer1.describe()

console.log(person1)
console.log(programmer1)