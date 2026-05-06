// Genrics code 

function add<T,U>(a:T,b:U){
    return (a as any) + (b as any);
}

const result1 = add(4,5);
const result2 = add("hello","world");
const result3 = add(true,4);

//Interface (same as type alies bass equal to use nhi karte isme direct define kar dete hai)
interface Greet{
    name:string;
    age:number
}

const greet:Greet = {
    name:"kanishk",
    age:22
}