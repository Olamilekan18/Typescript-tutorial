function detectTupe(val: number | string){
    if (typeof val === 'number'){
        return val % 2 === 0 ? 'even' : 'odd';
    }
    return val.toLowerCase()
}

function provideIs(id: string | null){
    if (!id){
        console.log("Enter a valid id");
    }
    id?.toLowerCase()
}