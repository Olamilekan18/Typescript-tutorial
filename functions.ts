function addTwo(num : number): number{
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpuser(name: string, email: string, password: string, isPaid: boolean){
}

let loginUser = (name: string, email : string, isPaid: false) =>{}

signUpuser("Ola", "ola@gmail.com", "password", true)
addTwo(5)
loginUser("Ola", "ola@gmail.com", false)

function getValue(myVal : number)  {
    if (myVal > 10) {
        return true
    } else {
        return "200 ok"
    }
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "iromnan"]

// ifthe heros array is a number, then the type of each hero will be a number"

heros.map((hero :string) =>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string) {
    console.log(errmsg)
}

function handleError(errmsg:string) {
    throw new Error(errmsg);
}

export {}