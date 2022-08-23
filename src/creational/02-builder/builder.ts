import { Pizza, PizzaStatus } from "../pizza";


export class PizzaChefBuilder {
    // an instance variable to hang on to our "work in progress"
    pizzaToMake: CustomizablePizza;

    constructor() {
        this.pizzaToMake = new CustomizablePizza();
    }

    // a builder method usually sets some option on the instance before it's finalized
    addTopping(topping: string) {
        console.log('adding topping: ', topping);
        this.pizzaToMake.addTopping(topping);
        return this;
    }

    // Builder patterns usually have a "build()" method to finalize what it is outputting
    build() {
        this.pizzaToMake.bake();
        this.pizzaToMake.deliver();
    }

    describePizza() {
        console.log(`\nSo far, your custom pizza is ${this.pizzaToMake.status} and will have these toppings:`);
        console.log(`[${this.pizzaToMake.getToppings()}]`);
        console.log(`It has${(!this.pizzaToMake.deliveryStatus) ? ' NOT' : ''} been delivered.`);
    }
}


class CustomizablePizza implements Pizza {
    toppings: string;
    status: PizzaStatus;
    deliveryStatus: boolean;

    _toppingsList: string[];

    constructor() {
        this.toppings = '';
        this.status = 'raw';
        this._toppingsList = [];
        this.deliveryStatus = false;
    }

    public getToppings() {
        return this.toppings;
    }

    public getIsCooked() {
        return this.status;
    }

    public getIsDelivered() {
        return this.deliveryStatus;
    }

    public addTopping(topping: string) {
        this._toppingsList.push(topping);
        this.toppings = this._toppingsList.join(', ');
    }

    public bake() {
        this.status = 'baked';
    }

    public deliver() {
        this.deliveryStatus = true;
    }
}