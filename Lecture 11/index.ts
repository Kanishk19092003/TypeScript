//Array Methods

const fruits:string[] = ["apple","banana","orange","grapes"];

//for adding use push
const newUpdatedFruits = fruits.push("mango");
// console.log(newUpdatedFruits);
// console.log("fruits");

//for removing use pop
const lastData = fruits.pop();
// console.log(lastData);


//how to use for loop
for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}