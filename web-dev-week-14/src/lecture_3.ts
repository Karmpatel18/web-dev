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
    id: string,
    age: number, 
    password: string,
}

type updatedProps = Pick<Client , 'age' | 'id' | 'password'>

function updateClient(client: updatedProps){
    const result = console.log(client.age + client.id + client.password);
    return result; 
}


updateClient({ age:34, id: "aksjlda", password: "aujsask"})