import { setTimeout } from "node:timers";

// number , string , any types 
let integer: number =  14;
// console.log(integer);

//simple greeting function that take string as an input 
function greeting(name: string){
    console.log("hello "+ name);
}
// greeting("karm");

//sum function that takes two input as a numbers
function sum(num1: number, num2 : number) : number{
    return num1 + num2  
}
// console.log(sum(4,5))

//function that takes function as an input and calls it after every one sec

function delayedCall (fn: (a: string)=> void) {
    setTimeout(fn,1000)
}
delayedCall(() => greeting("karm"))