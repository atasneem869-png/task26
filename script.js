"use strict";
class Account {
    Acc_No;
    Balance;
    constructor(Acc_No = 0, Balance = 0) {
        this.Acc_No = Acc_No;
        this.Balance = Balance;
    }
    debitAmount(amount) {
        if (amount !== 0) {
            this.Balance = -amount;
        }
        return this.Balance;
    }
    creditAmount(amount) {
        if (amount !== 0) {
            this.Balance = +amount;
        }
        return this.Balance;
    }
    getBalance() {
        return this.Balance;
    }
}
class Saving_Account extends Account {
    Date_of_opening = 0;
    addCustomer() { throw new Error("Method not implemented"); }
    ;
    removeCustomer() { throw new Error("Method not implemented"); }
    ;
    Min_Balance = 100;
}
class Current_Account extends Account {
    Date_of_opening = 0;
    addCustomer() { throw new Error("Method not implemented"); }
    ;
    removeCustomer() { throw new Error("Method not implemented"); }
    ;
    interest_rate = 0;
}
