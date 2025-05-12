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
