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
}
//creating new instance of a class
const person1 = new Person("kanishk", 22, ["cricket", "football"]);
const person2 = new Person("pawni", 11, ["sleeping", "eating"]);
const person3 = new Person("rajesh", 24, ["badminton", "hockey"]);
console.log(person3);
//# sourceMappingURL=index.js.map