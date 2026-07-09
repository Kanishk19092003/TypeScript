class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    private getAge() {
        return this.age;
    }

    public introduce() {
        console.log(`I am ${this.name}. My age is ${this.getAge()}.`); // Private method accessed within the class
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Accessible because 'name' is public
// console.log(person1.age); // Error: Property 'age' is private and only accessible within class 'Person'.

person1.greet(); // Public method accessible
person1.introduce(); // Public method that uses a private method internally