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


// USE COMMA MORE WHEN YOU USE TS WITH REACT
const getMoreSearchProducts = <T,>(): T => {
    return {} as T
}