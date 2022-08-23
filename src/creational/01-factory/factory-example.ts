import { PremadePizzaFactory } from "./factory";

console.log('--- FACTORY example ---');

console.log("What do you want from the frozen pizza aisle?");

const plainOption = PremadePizzaFactory.makePizza('plain');
console.log('plain toppings: ', plainOption.getToppings());

const vegetarianOption = PremadePizzaFactory.makePizza('veggie');
console.log('veggie toppings: ', vegetarianOption.getToppings());

const meatOption = PremadePizzaFactory.makePizza('meat');
console.log('meat toppings: ', meatOption.getToppings());

const ultimateOption = PremadePizzaFactory.makePizza('supreme');
console.log('supreme toppings: ', ultimateOption.getToppings());

console.log('--- Done ---');
