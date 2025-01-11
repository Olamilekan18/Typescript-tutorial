let score : number | string =33

score = 44
score = "fiftyfive"

type Users = {
    name: string,
    age: number,
    email: string,
    id: number,
}

type Admin = {
    username : string,
    id: number,
}

let Ola: Users | Admin = {name: 'Ola', id : 111, age : 22, email : 'ola@gmail.com' }

Ola = {username: 'Ola', id: 111, age: 22}

function getDbId(id: number | string){
    if(typeof id === "string"){
        return id.toLowerCase
    } else {
        return id * 2
    }
    //making dome Api calls
    console.log(`DB ID: ${id}`) 
}

// array

const data: number[] = [1,2,3,4]

const data2 : Array<string> = ["1", "2", "3", "4"]

const data3 : [number, string] = [1, "2"] 

// we cant use [number] | [string], that means it's either a string array or number array
// we can also use any

let pi:3.14 = 3.14;

let seatAllotment : "aisle" | "middle" | "window"

getDbId(3)
getDbId("3")