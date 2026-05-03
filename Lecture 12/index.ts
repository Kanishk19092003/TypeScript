//Map method
const arr:number[] = [1,2,3,4,5];
const doublingNumber:number[] = arr.map((curVal:number)=>curVal+curVal);
console.log(doublingNumber);


//Filter method
const evenNumber:number[] = arr.filter((curVal:number)=>curVal%2===0);
console.log(evenNumber);