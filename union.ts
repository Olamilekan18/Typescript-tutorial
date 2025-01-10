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

getDbId(3)
getDbId("3")