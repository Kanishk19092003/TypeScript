"use strict";
// Enums
Object.defineProperty(exports, "__esModule", { value: true });
var Roles;
(function (Roles) {
  Roles["user"] = "user";
  Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
  name: "kanishk",
  email: "kk123@gmail.com",
  password: "qwqe",
  role: Roles.admin,
};
const user2 = {
  email: "kk122@gmail.com",
  password: "qwqe",
  role: Roles.user,
};
const isAdmin = (user1) => {
  const { name, role } = user1;
  return role === "admin"
    ? `${name} is allowed to edit the website`
    : `${name} is not allowed to edit the website`;
};
const person1 = ["kanishk", 23, true];
const person2 = ["yadav", 22, false];
const displayPersonInfo = (person) => {
  const [name, age, hasDL] = person;
  console.log(`${name} of age ${age} has DL ? ${hasDL}`);
};
displayPersonInfo(person1);
displayPersonInfo(person2);
//# sourceMappingURL=index.js.map
