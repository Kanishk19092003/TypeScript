//ANY
let num:any = 5;
num = "kanishk";

// any is specially used for dynamic data like api data's,or json data


//UNKNOWN

let num2:unknown;
num2 = 5;
num2 = "kanishk";
num2 = true;

if(typeof num2 === "number"){
    console.log(num2+5);
}