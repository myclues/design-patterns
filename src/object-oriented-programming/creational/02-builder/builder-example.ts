import { PizzaChefBuilder } from "./builder";

console.log('--- BUILDER example ---');

console.log("Chef Bobby Flay is going to make you a bespoke pizza");

const bobbyFlay = new PizzaChefBuilder();
bobbyFlay.describePizza();

bobbyFlay.addTopping('cheese');
bobbyFlay.addTopping('tomato sauce');
bobbyFlay.addTopping('pepperoni');

bobbyFlay.describePizza();

bobbyFlay.addTopping('anchovies(yuck)');

console.log("That's it. no more toppings for you.  Wrap it up!");
bobbyFlay.build();

bobbyFlay.describePizza();

console.log()

console.log('--- Done ---');
