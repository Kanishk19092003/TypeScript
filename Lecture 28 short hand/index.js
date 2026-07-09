"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceParent() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}
class Student extends Person {
    studentId;
    constructor(name, age, hobbies, studentId) {
        super(name, age, hobbies);
        this.studentId = studentId;
    }
    introduceStudent() {
        return `Hi, I\'m ${this.name}, I\'m ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
//# sourceMappingURL=index.js.map