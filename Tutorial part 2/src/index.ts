console.log("hello world, lets see how the world goes this year");

class User {
    // you can also use readonly to make any property readonly
    city: string = ""
    constructor(public name: string, public age: number) {
        this.name = name
        this.age = age
    
    }
}
const Ola = new User( "Joy", 14);
Ola.city = "Ife"