// 1 - var, let e const

var x = 10
var y = 15

if(y>10) {
    var x = 5
    console.log(x)
}
 
console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

function logName() {
    const name = "Pedro"
    console.log(name)
}

const name = "Matheus"

logName()

console.log(name)

// 2- Arrow function
const sum = function(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5));

console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return `Hello, ${name}`
    } else {
        return "Hello"
    }
}

console.log(greeting("Regiane"))
console.log(greeting())

const user = {
    name: "Fred",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`)
        })
    },
};

// user.sayUserName()
// user.sayUserNameArrow()

// 3- Filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
})

console.log(highNumbers)

const users = [
    {name: "Fred", available: true},
    {name: "Lincon", available: false},
    {name: "Lore", available: true},
    {name: "Maria", available: true},
    {name: "João", available: false},
]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)

// 4 - map
const products = [
    {name: "Camisa", price: 25.99, category: "Roupas"},
    {name: "Chaleira", price: 199, category: "Eletro"},
    {name: "Maçã", price: 5.99, category: "Frutas"},
    {name: "Calça", price: 85.99, category: "Roupas"},
    {name: "Limão", price: 2.99, category: "Frutas"}
]

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true
    }
})

console.log(products)

// 5- Template literals
const userName = "Regiane"
const age = 29

console.log(`O nome do usuário é ${userName} e ela tem ${age} anos.`)