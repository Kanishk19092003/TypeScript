//creating class in ts
class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `hi i am ${this.name} and i am ${this.age} years old and i love ${this.hobbies.join(",")}.`;
  }
}

//INHERITANCE

class Students extends Person {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name,age,hobbies)
    this.grade = grade;
  }
}

//creating new instance of a class
const person1: Person = new Person("kanishk", 22, ["cricket", "football"]);
const student1: Person = new Students("pawni", 11, ["sleeping", "eating"], 34);
const person3: Person = new Person("rajesh", 24, ["badminton", "hockey"]);

console.log(student1.introduce());
