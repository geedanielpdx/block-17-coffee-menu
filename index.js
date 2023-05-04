// Load the coffee data modul
const coffeeMenu = require("./coffee_data");

// Print all drink names
const drinkNames = coffeeMenu.map(item => item.name);
console.log("All drinks:");
console.log(drinkNames);

// Print cheap drink names and prices
const cheapDrinks = coffeeMenu.filter(item => item.price <= 5);
const cheapDrinkNames = cheapDrinks.map(item => item.name);
console.log("Cheap drinks (5 or less):");
console.log(cheapDrinkNames);

// Print drinks with even prices
const evenPricedDrinks = coffeeMenu.filter(item => item.price % 2 === 0);
const evenPricedDrinkNames = evenPricedDrinks.map(item => item.name);
console.log("Drinks with even prices:");
console.log(evenPricedDrinkNames);

// Calculate the total cost of one of every drink
const total = coffeeMenu.reduce((acc, item) => acc + item.price, 0);
console.log(`The total cost of one of every drink is $${total}.`);

// Print seasonal drinks with "with imported beans" after the name
const seasonalDrinks = coffeeMenu.filter(item => item.seasonal === true);
const seasonalDrinkNames = seasonalDrinks.map(item => `${item.name} with imported beans`);
console.log("Seasonal drinks with imported beans:");
console.log(seasonalDrinkNames);