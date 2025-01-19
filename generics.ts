const score : Array<number> = []

const names : Array<string> = []

function identityOne(val:  boolean| number) : boolean | number{
    return val;
}

function identityThree<Type>(val: Type) : Type{
    return val;
}

function identityFour <T>(val: T): T{
    return val
}

interface Bootle{
    brand : string,
    type: number
}


// identityFour<Bootle>({})

function getSearchProducta<T>(products : T[]): T{

    const myIndex =  3
    return products[myIndex]
}

interface Database{
    connection: string,
    username: string,
    password: string
}


// USE COMMA MORE WHEN YOU USE TS WITH REACT
const getMoreSearchProducts = <T,>(): T => {
    return {} as T
}

function anotherFunction<T, U>(valOne : T, valTwo : U):object{
    return {
        valOne,
        valTwo
    }
}