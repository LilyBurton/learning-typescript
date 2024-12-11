// Index Signatures

interface TransactionObj {
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransaction.Pizza)
console.log(todaysTransaction['Pizza'])