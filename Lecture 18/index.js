"use strict";
//union( this symbol is used "|")
Object.defineProperty(exports, "__esModule", { value: true });
const userInput = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase(); // string methods allowed
    }
    else {
        return value.toFixed(2); // number methods allowed
    }
};
console.log(userInput("kanishk"));
const admin = {
    name: "Kanishk",
    role: "admin"
};
//GENRICS (<T>) used when type is not defined for multiple data
function identity(value) {
    console.log("Value is:", value);
    return value;
}
// usage
identity("Kanishk");
identity(25);
identity(true);
//# sourceMappingURL=index.js.map