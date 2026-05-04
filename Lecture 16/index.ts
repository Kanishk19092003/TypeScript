// Enums 

enum Roles{
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    password:string;
    role:Roles;
}

const user1:LoginDetails ={
    name:"kanishk",
    email:"kk123@gmail.com",
    password:"qwqe",
    role:Roles.admin
}

const user2:LoginDetails ={
    email:"kk122@gmail.com",
    password:"qwqe",
    role:Roles.user
}

const isAdmin = (user1:LoginDetails):string=>{
    const{name,role} = user1;
    return role === "admin" ? `${name} is allowed to edit the website`
                            : `${name} is not allowed to edit the website`
}


//tuples

type PersonInfo = readonly[string,number,boolean];

const person1:PersonInfo = ["kanishk",23,true];
const person2:PersonInfo = ["yadav",22,false];

const displayPersonInfo = (person:PersonInfo):void=>{
    const [name,age,hasDL] = person;
    console.log(`${name} of age ${age} has DL ? ${hasDL}`);    
}

displayPersonInfo(person1);
displayPersonInfo(person2);




