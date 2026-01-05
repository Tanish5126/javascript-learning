const account_Id = 2048602
let user_email = "user123@gmail.com"
var account_bal = "$700"
let account_city = "Mumbai"

// 'let' is used now instead of 'var' because 'var' does not understand block scope {}
// account_Id = 2342  Double declaration is not allowed in javascript for constant

account_bal = "$500"

console.log(account_Id);
console.log(account_bal);
console.table([account_Id , account_bal ,account_city , user_email])


