interface userInterface {
    name: string,
    age: number,
    address: {
        city: string,
        country: string,
        pincode: number
    }
}

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
const result = isLegal(user)
console.log(result)