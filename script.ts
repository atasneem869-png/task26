class Account {
    Acc_No: number;
    Balance: number;
    
    constructor(Acc_No = 0, Balance = 0) {
       this.Acc_No = Acc_No;
       this.Balance = Balance;
    }

    debitAmount(amount: number): number {
        if (amount !== 0) {
         this.Balance -= amount;
        }
        return this.Balance;
    }

    creditAmount(amount: number): number {
        if (amount !== 0) {
         this.Balance += amount;
        }
        return this.Balance;
    }

    getBalance(): number {
        return this.Balance;
    }
}

interface IAccount {
    Date_of_opening: number;
    addCustomer(): void;
    removeCustomer(): void;
}

class Saving_Account extends Account implements IAccount {
  Date_of_opening: number;
  Min_Balance: number;

  constructor(Acc_No = 0, Balance = 0, Date_of_opening = 0, Min_Balance = 100) {
      super(Acc_No, Balance);
      this.Date_of_opening = Date_of_opening;
      this.Min_Balance = Min_Balance;
  }

  addCustomer(): void {
      throw new Error("Method not implemented.");
  }
  removeCustomer(): void {
      throw new Error("Method not implemented.");
  }
}

class Current_Account extends Account implements IAccount {
  Date_of_opening: number;
  interest_rate: number;

  constructor(Acc_No = 0, Balance = 0, Date_of_opening = 0, interest_rate = 0) {
      super(Acc_No, Balance);
      this.Date_of_opening = Date_of_opening;
      this.interest_rate = interest_rate;
  }

  addCustomer(): void {
      throw new Error("Method not implemented.");
  }
  removeCustomer(): void {
      throw new Error("Method not implemented.");
  }
}