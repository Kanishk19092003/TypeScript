// FUNCTION DECLERATION

function greet(name:string , id:number){
    console.log(`Welcome! ${name} and your id is ${id}`)
}

greet("kanishk",1);

//OR 

const welcome=(name:string, id:number):String=>{
    return `${name}`;
}

const welo = welcome("kanishk",2);
console.log(welo);
