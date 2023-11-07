#! /user/bin/env node
// MAIN CLASS - Program.ts
var MyNamespace;
(function (MyNamespace) {
    class NewClass {
        static main(args) {
        }
    }
    MyNamespace.NewClass = NewClass;
})(MyNamespace || (MyNamespace = {}));
//Class - BAnkAccount.ts
var bankk;
(function (bankk) {
    class Bankaccount {
        constructor() {
            this.accountBalance = 100;
        }
        debit(amount) {
            let statement = "Sorry, you have insufficient balance!";
            if (amount > 0) {
                statement = "The amount you entered is wrong!";
                if (this.accountBalance > amount) {
                    this.accountBalance -= amount;
                    statement = `Transaction successful! New account balance is ${this.accountBalance}`;
                }
                else {
                    statement = "You don't have enough money to do this transaction.";
                }
            }
            return statement;
        }
        credit(amount) {
            let statement = "Transaction failed";
            if (amount > 0) {
                this.accountBalance += amount;
                if (amount > 100) {
                    this.accountBalance -= 1;
                }
                statement = "Your account has been credited successfully!";
            }
            return statement;
        }
    }
    bankk.Bankaccount = Bankaccount;
})(bankk || (bankk = {}));
;
//Class - Customer.ts
(function (bankk) {
    class Customer {
        constructor() {
            this.firstName = "Zainab";
            this.lastName = "Kazmi";
            this.gender = "female";
            this.age = 19;
            this.mobileNumber = "123456";
        }
        customerInfo() {
            return `Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}
            Gender: ${this.gender}
            Mobile: ${this.mobileNumber}
            Account Balance: ${this.bankAccount.accountBalance}`;
        }
    }
    bankk.Customer = Customer;
    class BankAccount {
        constructor() {
            this.accountBalance = 400000;
        }
    }
    bankk.BankAccount = BankAccount;
})(bankk || (bankk = {}));
;
export {};
