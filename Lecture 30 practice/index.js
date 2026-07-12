"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("invalid credentials");
        }
        this._balance = newBalance;
    }
}
const account = new BankAccount();
account.balance = 80;
console.log(account.balance);
//# sourceMappingURL=index.js.map