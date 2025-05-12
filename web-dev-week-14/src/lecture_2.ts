import { stringify } from "node:querystring"

interface Address {
        city: string,                
        country: string,    
        pincode: number
    
}
// interfaces can use other interfaces as well like below userInterface is using Address interface
interface userInterface {
    name: string,
    age: number,
    address?: Address        
}
//to make the address field optional 
// user "?" before : "colon"  
// like "address?: { code here }"

let user:userInterface = {
    name: "karm",
    age: 69,
    address: {
        city:"ahmedabad",
        country:"india",
        pincode:382350
    } 
}

function isLegal(user:userInterface):boolean{
    if(user.age >= 18){
        return true
    }
    else return false
}
// const result = isLegal(user)
// console.log(result)

interface People {
    name: string,
    age: number,
    greet?: ()  => string,
    isLegal(): boolean
}


// object field can be a function also 
// in above People interface greet is a function returning a string 

// let people: People = {
//     name: "karm",
//     age: 34, 
//     greet: () => {
//         return "hi"
//     },
    
// } 

// let greeting = people.greet?.()
// console.log(greeting) 



class Manager implements People {
    // name: string;
    // age: number;
    // to reduce data redundancy
    constructor(public name: string ,public age: number){
        this.name = name;
        this.age = age;     
    };
    isLegal() {
        return this.age > 18;
    };
}

let person =  new Manager("jhon",34);
console.log(person.isLegal());

//implementing interfaces ( interfaces vs types )
//Abstract classes vs interfaces ( interview question )

abstract class userAbstract {
    name: string;
    constructor(name:string){
        this.name = name ;
    }
    hello(){
        console.log("hi their")
    }
    abstract greet(): boolean; 
}

// in Abstract classes we can use default function 
// like we use hello() function above , it can't be done in  interfaces

class Employee extends userAbstract{
    name: string;
    constructor(name:string){
        super(name);
        this.name = name; 
    }
    greet(): boolean {
        return true;
    }
}


// types are similar to interfaces 
// but they are not implemented as interfaces with classes 

type User = {
    name:string,
    id: number
}
type Admin = { 
    name: string,
    parentName: string,
}

// types give us unique property of : 
// 1. union of types "  |  "
// 2. intersection of types "  &  "

type enrolledStudent = User & Admin ; 
// using intersection in variable enrolledStudent


const result: enrolledStudent = {
    name: "karm",
    id: 453,
    parentName: "karn.p"

}
// by the use of intersection function can use both the types with all fields 

const results = (input: enrolledStudent) => {
    console.log(input.name +" "+input.id+" "+ input.parentName)

}
//it shows all the object fields in log 
results(result)