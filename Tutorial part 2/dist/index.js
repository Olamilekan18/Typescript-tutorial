"use strict";
console.log("hello world, lets see how the world goes this year");
class User {
    //private makes it unaccessible after the user class
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._courseCount = 1;
        // you can also use readonly to make any property readonly
        this.city = "";
        this.id = "1a112";
        this.name = name;
        this.age = age;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `${this.name}.${this.id}@gmail.com`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (value > 0 && value <= 10) {
            this._courseCount = value;
        }
    }
}
const Ola = new User("Joy", 14);
Ola.city = "Ife";
