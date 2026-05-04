//call signature
type Student = {
    name: string;
    age: number;
    greet:(country:string) => string
}

const student1: Student = {
    name: "Kanishk",
    age: 22,
    greet:(country):string => `welcome my name is ${student1.name} and i am ${student1.age} years old and i from ${country}`
}

console.log(student1.greet("india"));
