"use strict";
// Excercise 21 Array of Objects
let snacks = [];
const snack = {
    name: "Lays",
    price: 50,
    description: "flavoured potato chips"
};
snacks.push(snack);
snacks.push({
    name: "Kurkure",
    price: 40,
    description: "spicy corn snacks"
});
snacks.push({
    name: "Slanty",
    price: 20,
    description: "salty snacks"
});
console.log(snacks);
