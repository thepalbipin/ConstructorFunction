
function CreateBankAccount(accountNumber, name, type, balance){
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    //deposit(amount) - Deposits the specified amount into the account.
    this.deposit=function(amount){
        this.balance+=amount;
    }

    //withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
    this.withDraw=function(amount){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log("withdraw Successfully");
        }
        else{
            console.log("you don't have sufficient balance", this.balance);
        }
    }

    //checkBalance() - Prints the account's balance.
    this.checkBalance=function(){
        console.log(`Your balance is ${this.balance}`);
    }

    //isActive() - Checks and returns whether the account is active.
    this.isActive=function(){
        console.log("Your Account is ACTIVE");
    }
};

let person1 = new CreateBankAccount(13264488292, "Chintu", "Current", 2500);
let person2 = new CreateBankAccount(14236626882, "Mintu", "Saving", 1200);
let person3 = new CreateBankAccount(14268973519, "Sintu", "Saving", 1200);
/*
console.log(person1, person2, person3);

person1.deposit(2500);
console.log(person1);
*/
person1.withDraw(2000);
// console.log(person1);

person1.withDraw(5000);
// console.log(person1);

person1.checkBalance();

person2.withDraw(200);
// console.log(person1);

person2.withDraw(50);
// console.log(person1);

person2.checkBalance();

person3.withDraw(205);
// console.log(person1);

person3.withDraw(580);
// console.log(person1);

person3.checkBalance();

console.log(CreateBankAccount());