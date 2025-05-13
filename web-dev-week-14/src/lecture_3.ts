// example pre-requisites
interface User {
    name: string,
    age: number
}

function addName(user1: User, user2: User){
    return user1.age + user2.age;
}

const result = addName({name:"karm",age:34},{name:"patel",age:12});

// console.log(result)



//using Pick API
// Pink provides you flexibility in selecting fields from a interface or a Type 

interface Client {
    name: string,
    readonly id: string,
    age: number, 
    password: string,
}
// when readonly is assigned to any field it can't be changed 
// example

const client: Client = {
    name: "karm patel",
    id: "324223524242",
    age: 498,
    password: "askldfajf"
}

// client.id = "454545445"   <<  here typescript will complain because readonly does not let anyone to change the internal field value  

type updatedProps = Pick<Client , 'age' | 'id' | 'password'>

// use of Partial 
// can be used to partially when you want to partially choose in the interface or a type.  

type partialProps = Partial<updatedProps>

function updateClient(client: partialProps){
    const result = console.log(
        (client.age ?? 0) + (client.id ?? '') + (client.password ?? '')
    );
    return result; 
}


// updateClient({ age:34, id: "aksjlda", password: "aujsask"})


// Records 
// records give you more cleaner way to write types of an object 

type Users = Record<string , number>
const user1: Users = {
    "karm1" : 45,
    "ajskdfa" : 43
}

// <<<<<<   Maps  >>>>>> 

// key - value pair 
// provides methods like : 
// 1. set 
// 2. get 
// 3. delete
// 4. has 

const user = new Map();
user.set(1, { age: 23, address: "akjsd akls jas lkaf "});
console.log(user)
console.log(user.has(2))


// Exclude 

type userType =  'id' | 'name' | 'password'; 
type excludedType = Exclude<userType,'name'>;
function printId(useId: excludedType){
    return true
}

// printId('name')
// 'name' is excluded thus typescript is complaining 



// type inference with zod 
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});


type UserSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: UserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);