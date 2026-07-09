//creating class in ts
class Person{
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){
            this.name = name;
            this.age = age;
            this.hobbies = hobbies;

    }
}

//creating new instance of a class
const person1:Person = new Person("kanishk",22,["cricket","football"]);
const person2:Person = new Person("pawni",11,["sleeping","eating"]);
const person3:Person = new Person("rajesh",24,["badminton","hockey"]);

console.log(person3);
