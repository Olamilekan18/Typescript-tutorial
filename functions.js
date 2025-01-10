"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpuser(name, email, password, isPaid) {
}
var loginUser = function (name, email, isPaid) { };
signUpuser("Ola", "ola@gmail.com", "password", true);
addTwo(5);
loginUser("Ola", "ola@gmail.com", false);
function getValue(myVal) {
    if (myVal > 10) {
        return true;
    }
    else {
        return "200 ok";
    }
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "iromnan"];
// ifthe heros array is a number, then the type of each hero will be a number"
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
