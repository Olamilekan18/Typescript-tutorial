interface User {
    id: number;
    name: string;
    googleId?: string;
    startTrial(): string;
    getCoupon(couponname: string) : number
}

const Ola: User = {
    id: 1,
    name: "Ola",
    // googleId: "abc123"  // This property is optional,
    startTrial:()=> {
        return "Trial started";
    },
    getCoupon:(couponname : "Olami123") => {
        return 10;
    },
    githubToken: "abc123"  // This property is not defined in the interface
}

interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "hr" | "manager"

}
const Admin1: Admin = {
    id: 1,
    name: "Ola",
    // googleId: "abc123"  // This property is optional,
    startTrial:()=> {
        return "Trial started";
    },
    getCoupon:(couponname : "Olami123") => {
        return 10;
    },
    role: "admin",
    githubToken: "abc123"  // This property is not defined in the interface
}


export{} 