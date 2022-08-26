import { Pizza, PizzaType, PizzaStatus } from "../pizza";

export class PremadePizzaFactory {
    // Factories are very simple by design - they should only be used
    // to CREATE generic "pre-configured" things.
    public static makePizza(type: PizzaType): PlainPizza {
        console.log(`\nMaking a ${type} pizza fresh from the factory`);
        switch (type) {
            case 'veggie':
                return new VeggiePizza();
            case 'meat':
                return new MeatPizza();
            case 'supreme':
                return new SupremePizza();
            case 'plain':
            default:
                return new PlainPizza();
        }
    }
}

export class PlainPizza implements Pizza {
    toppings: string;
    status: PizzaStatus;

    constructor() {
        this.toppings = 'cheese';
        this.status = 'raw';
    }

    public getToppings() {
        return this.toppings;
    }

    public bake() {
        this.status = 'baked';
    }
}

export class VeggiePizza extends PlainPizza {
    constructor() {
        super();
        this.toppings = 'mushrooms';
    }
}

export class MeatPizza extends PlainPizza {
    constructor() {
        super();
        this.toppings = 'pepperoni';
    }
}

export class SupremePizza extends PlainPizza {
    constructor() {
        super();
        this.toppings = 'EVERYTHING';
    }
}