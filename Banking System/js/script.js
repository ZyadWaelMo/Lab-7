import BankAccount from "./bankAccount.js"


let zyadAccount = new BankAccount(1,500, "Savings")
let bassemAccount = new BankAccount(2,100,"Checking")

zyadAccount.deposit(50)
// zyadAccount.deposit("blablabla")
// zyadAccount.deposit(-9)

zyadAccount.withdraw(100)
// zyadAccount.withdraw(0)
// zyadAccount.withdraw(10000)

console.log('Zyad Balance :>> ', zyadAccount.getBalance());
console.log('Bassem Balance :>> ', bassemAccount.getBalance());

zyadAccount.applyInterest(12)
// bassemAccount.applyInterest(12)
// zyadAccount.applyInterest(-9)
// zyadAccount.applyInterest("blablabla")

zyadAccount.transferFunds(100,bassemAccount)
bassemAccount.transferFunds(50,zyadAccount)
// zyadAccount.transferFunds(500000,bassemAccount)
// zyadAccount.transferFunds("blablabla",bassemAccount)
// zyadAccount.transferFunds(100,blablabla)


console.log('Zyad Account Summary :>> ', zyadAccount.getAccountSummary());
console.log('Bassem Account Summary :>> ', bassemAccount.getAccountSummary());

console.log('Zyad Transaction History :>> ', zyadAccount.getTransactionHistory());
console.log('Bassem Transaction History :>> ', bassemAccount.getTransactionHistory());

//! Syntax Error (Encapsulation)
// console.log('Error1 :>> ', zyadAccount.#balance);
// console.log('Error2 :>> ', zyadAccount.#generateAccountSummary());
// console.log('Error3 :>> ', zyadAccount.#transactionHistory);
// console.log('Error4 :>> ', zyadAccount.#recordTransaction);


