"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//creating class in ts
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `hi i am ${this.name} and i am ${this.age} years old and i love ${this.hobbies.join(",")}.`;
    }
}
//INHERITANCE
class Students extends Person {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
}
//creating new instance of a class
const person1 = new Person("kanishk", 22, ["cricket", "football"]);
const student1 = new Students("pawni", 11, ["sleeping", "eating"], 34);
const person3 = new Person("rajesh", 24, ["badminton", "hockey"]);
console.log(student1.introduce());
//# sourceMappingURL=index.js.map