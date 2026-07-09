class Person{
    constructor(
        public name:string,
        public age:number,
        protected hobbies:string[]
    ){}

    introduceParent():string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }

}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        hobbies: string[],
        public studentId: string
    ) {
        super(name, age, hobbies);
    }

    introduceStudent(): string {
        return `Hi, I\'m ${this.name}, I\'m ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}