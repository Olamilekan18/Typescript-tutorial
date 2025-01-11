let users: (string| number)[] = ['John', 25, 'Jane', 30];

let tUser : [string, number, boolean]
tUser = ['John', 25, true];

let rgb : [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser:User = [112, "eAg.com", ]

// you can chenge value in tuples

newUser[0] = 123;

// newUser.push(true)
export{}