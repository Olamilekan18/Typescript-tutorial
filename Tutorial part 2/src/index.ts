console.log("hello world, lets see how the world goes this year");

class User {    
    private _courseCount = 1;

    // you can also use readonly to make any property readonly
    city: string = ""
    private readonly id: string = "1a112"
    //private makes it unaccessible after the user class
    constructor(public name: string, public age: number) {
        this.name = name
        this.age = age
    
    }

    private deleteToken(){
        console.log("Token deleted")
    }

    //we will continue drom here tomorrow no light

    
    get getAppleEmail(): string{
        return `${this.name}.${this.id}@gmail.com`
    }
    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(value: number){
        if(value > 0 && value <= 10){
            this._courseCount = value
        }
    }
    //you can't make CourseCount :number or any other type
}
const Ola = new User( "Joy", 14);
// Ola.city = "Ife" 

setTimeout(() => {
    console.log('first')
}, 200);

``