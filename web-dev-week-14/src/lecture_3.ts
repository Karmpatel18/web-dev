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


updateClient({ age:34, id: "aksjlda", password: "aujsask"})