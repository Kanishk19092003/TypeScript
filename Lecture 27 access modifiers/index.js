"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    getAge() {
        return this.age;
    }
    introduce() {
        console.log(`I am ${this.name}. My age is ${this.getAge()}.`); // Private method accessed within the class
    }
}
const person1 = new Person("Alice", 30);
console.log(person1.name); // Accessible because 'name' is public
// console.log(person1.age); // Error: Property 'age' is private and only accessible within class 'Person'.
person1.greet(); // Public method accessible
person1.introduce(); // Public method that uses a private method internally
//# sourceMappingURL=index.js.map