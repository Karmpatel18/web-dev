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



// let user = {
//     userName: "karm",
//     age:56
// }


// type user = {
    //     userName: string,
    //     age: number
    // }

// types lets you union different types or interfaces like example :

type employee = {
    name: string,
    age: number 
}
type deparment = {
    name: string,
    address: string
}
//union of employee type and deparment type 
type teamLead = employee & deparment
    
const t: teamLead = {
    name: "karm",
    age: 34,
    address: "asjkdf",
}
//logging out address from the t object
console.log(t.address);



//interface named "user" is declared 
interface user{
        name: string,
        age: number,
    }
//uesrTable is declared here 

let userTable: user = {
    name: "karm",
    age: 45,
}

//userTable is passed to the function as an Object with the interface ":user"

function greet(userTable: user){
    console.log("hello "+userTable.name+" end your age is : "+userTable.age)
}

greet(userTable)