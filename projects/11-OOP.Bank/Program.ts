#! /user/bin/env node

// MAIN CLASS - Program.ts
namespace MyNamespace {
    export class NewClass {
        static main(args: string[]): void {
        }
    }
}

//Interface- IBankAccount.ts

interface IBankAccount {
    debit(d: number): string;
    credit(d: number): string;
}

//Class - BAnkAccount.ts

namespace bankk {
    export class Bankaccount implements IBankAccount {
        public accountBalance: number;

        constructor() {
            this.accountBalance = 100;
        }

        public debit(amount: number): string {
            let statement: string = "Sorry, you have insufficient balance!";

            if (amount > 0) {
                statement = "The amount you entered is wrong!";

                if (this.accountBalance > amount) {
                    this.accountBalance -= amount;
                    statement = `Transaction successful! New account balance is ${this.accountBalance}`;
                } else {
                    statement = "You don't have enough money to do this transaction.";
                }
            }
            return statement;
        }

        public credit(amount: number): string {
            let statement: string = "Transaction failed";

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
};


//Class - Customer.ts

namespace bankk {
    export class Customer {
        public firstName: string = "Zainab";
        public lastName: string = "Kazmi";
        public gender: string = "female";
        public age: number = 19;
        public mobileNumber: string = "123456";
        public bankAccount!: BankAccount ;

        public customerInfo(): string {
            return `Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}
            Gender: ${this.gender}
            Mobile: ${this.mobileNumber}
            Account Balance: ${this.bankAccount.accountBalance}`;
        }
    }

    export class BankAccount {
        public accountBalance: number = 400000;
    }
};