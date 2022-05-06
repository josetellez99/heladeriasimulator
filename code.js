let chocolateAmount = document.getElementById("chocolateInventory")
let vainillaAmount = document.getElementById("vainillaInventory")
let OreoAmount = document.getElementById("oreoInventory")

class flavors {
    constructor (name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}

let inventory = [
    {name: "Chocolate", price: 300, amount: 500},
    {name: "Vainilla", price: 300, amount: 600},
    {name: "Oreo", price: 300, amount: 400},
]

let nombre;