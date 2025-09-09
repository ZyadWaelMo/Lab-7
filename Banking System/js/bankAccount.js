export default class BankAccount {


    #accountNumber
    #balance
    #accountType
    #transactionHistory

    constructor(accountNumber, initialBalance, accountType) {

        if (initialBalance < 0) {
            throw new Error("Initial Balance must be positive")
        }

        this.#accountNumber = accountNumber
        this.#balance = initialBalance
        this.#accountType = accountType.toLowerCase()
        this.#transactionHistory = []

        this.#recordTransaction("Initial Deposit", initialBalance)

    }

    getBalance() {
        return this.#balance
    }
    getTransactionHistory() {
        return this.#transactionHistory
    }

    #recordTransaction(type, amount) {
        const transaction = {
            type: type,
            amount: amount,
            time: new Date().toISOString(),
            newBalance: this.#balance
        }
        this.#transactionHistory.push(transaction)
    }


    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive")
        }
        if (typeof amount !== 'number') {
            throw new Error("Amount must be a number")
        }
        this.#balance += amount
        this.#recordTransaction("Deposit", amount)
        console.log(`<< Successful Deposit >> Deposited ${amount} - New balance = ${this.#balance}`)
    }


    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive")
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient amount")
        }
        if (typeof amount !== 'number') {
            throw new Error("Amount must be a number")
        }
        this.#balance -= amount
        this.#recordTransaction("Withdrawal", amount)
        console.log(`<< Successful Withdraw >> Withdrew ${amount} - New balance = ${this.#balance}`)
    }

    transferFunds(amount, targetAccount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive")
        }
        if (typeof amount !== 'number') {
            throw new Error("Amount must be a number")
        }
        if (!(targetAccount instanceof BankAccount)) {
            throw new Error("Target account must be an instance of BankAccount")
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient amount")
        }
        this.#balance -= amount
        targetAccount.#balance += amount
        this.#recordTransaction("Transfer out", amount)
        targetAccount.#recordTransaction("Transfer in", amount)

        console.log(`<< Successful Transfer >> Amount ${amount} - New balance = ${this.#balance}`)
    }


    applyInterest(rate){
        if (rate <= 0) {
            throw new Error("Rate must be positive")
        }
        if (this.#accountType !== "savings") {
            throw new Error("Can't apply rate, Account is not a savings account")
        }
        if (typeof rate !== 'number') {
            throw new Error("Rate must be a number")
        }
        const interestAmount = this.#balance * (rate/100)
        this.#balance += interestAmount
        this.#recordTransaction("Apply interest", interestAmount)

        console.log(`<< Successful interest >> interest amount ${interestAmount} - New balance = ${this.#balance}`)
    }

    
    #generateAccountSummary(){
        return {
            accountNumber : this.#accountNumber,
            accountType : this.#accountType,
            accountBalance : this.#balance,
        }
    }
    
    
    getAccountSummary(){
        return `Account Summary : ${JSON.stringify(this.#generateAccountSummary())}`
    }














}










