/**
 * This model represents our entire order form.
 * 
 * It can have properties that use sub-models, but the instance methods
 * are all specifically to modify something about each OrderFormModel itself.
 */
export class OrderFormModel {
    items: OrderItemModel[]
    discountApplied: number
    completed: boolean

    constructor() {
        console.log('Starting a new order');
        this.items = [];
        this.discountApplied = 0.0;
        this.completed = false;
    }

    calculateTotal() {
        let subtotal = 0;
        this.items.forEach(item => {
            subtotal += item.calculateSubtotal();
        });
        return subtotal * (1 - this.discountApplied);
    }

    applyDiscount(percentOff: number) {
        this.discountApplied = percentOff;
    }

    submitOrder() {
        this.completed = true;
    }
}

/**
 * This simple model captures one line item on an order.
 * 
 * It has one convenience method to calculate the subtotal for this line item only.
 * 
 * This model has no knowledge of its parent context, i.e. the OrderFormModel
 */
export class OrderItemModel {
    item: PizzaModel
    quantity: number

    constructor(item: PizzaModel, initialQuantity: number) {
        this.item = item;
        this.quantity = initialQuantity;
    }

    calculateSubtotal() {
        return this.item.price.cost * this.quantity;
    }
}

export type PizzaSize = 'S' | 'M' | 'L';

export class PizzaModel {
    _toppings: string[]
    size: PizzaSize
    price: PriceModel

    constructor(toppings: string[], size: PizzaSize, price: PriceModel) {
        this._toppings = toppings;
        this.size = size;
        this.price = price;
    }

    showDetails() {
        return `${this.price.toString()} - [${this.size}] pizza (${this._toppings.join(', ')})`
    }
}

export class PriceModel {
    cost: number

    constructor(price: number) {
        this.cost = price;
    }

    toString() {
        return `$${this.cost}`;
    }
}

/**
 * This is a PizzaModel
 */
 const modelPizza = new PizzaModel(['cheese'], 'S', new PriceModel(10));

/**
 * This looks like a Pizza, but isn't quite a pizza
 */
const homunculusPizza = {
    _toppings: [ 'cheese' ],
    size: 'S',
    price: {
        cost: 10
    }
}

console.log('stringified modelPizza:\t\t', JSON.stringify(modelPizza));
console.log('stringified homunculusPizza:\t', JSON.stringify(homunculusPizza));

console.log('\nmodelPizza is a pizza:\t\t', modelPizza instanceof PizzaModel);
console.log('homunculusPizza is a pizza:\t', homunculusPizza instanceof PizzaModel);

console.log('\nmodelPizza:\n', modelPizza);
console.log('homunculusPizza:\n', homunculusPizza);