const User ={
    name: "Ola",
    email : "ola@gmail.com",
    isActive : true
}

function createUser({name:string, isPaid: boolean}) {
    
}

let newUser =({name : "Jay", isPaid : false, email: "james@gmail.com" })

createUser(newUser)

function createCourse(name: string, price: number): {} {
    return {name: "React", price: 199.99}
}
// you cant assign a readonly property. eg myUser._id
type User = {
    readonly _id : string
    name: string,
    email: string,
    isActive: boolean
    creeditcardetails?:number
}

let myUser : User = {
    _id : "1234",
    name : "Ola",
    email : "ola@gmail.com",
    isActive : true
}



myUser.email = "olaaa@gmail.com"

type cardNumber = {
    cardNumber : string,
}

type cardDate = {
    cardDate : string,
}

type cardDetails = cardNumber & cardDate & {
    cvv : number,
}

function createUer(User: User) {}

export {}