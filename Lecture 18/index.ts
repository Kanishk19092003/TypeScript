//union( this symbol is used "|")

const userInput = (value: string | number)=> {
    if (typeof value === "string") {
        return value.toUpperCase();   // string methods allowed
    } else {
        return value.toFixed(2);    // number methods allowed
    }
}
console.log(userInput("kanishk"));  


//intersection ("&")

type Admin = {
    role: "admin";
};

type User = {
    name: string;
};

type AdminUser = Admin & User;

const admin: AdminUser = {
    name: "Kanishk",
    role: "admin"
};


//GENRICS (<T>) used when type is not defined for multiple data
function identity<T>(value: T): T {
    console.log("Value is:", value);
    return value;
}

// usage
identity<string>("Kanishk");
identity<number>(25);
identity<boolean>(true);