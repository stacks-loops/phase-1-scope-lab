// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    console.log(customerName)
}

//upperCaseCustomerName()
//console.log(customerName)

function setBestCustomer() {
    bestCustomer = window.bestCustomer = 'not bob'
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'cats'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = leastFavoriteCustomer.toUpperCase()

}
