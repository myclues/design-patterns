import {OrderFormModel, OrderItemModel, PizzaModel, PriceModel} from './model';

export class PizzaPlanetController {
    private orderForm: OrderFormModel

    constructor() {
        this.orderForm = new OrderFormModel();
    }

    /**
     * Since the menu options don't change from order to order, it is a static variable for
     * our entire application controller
     */
    static menu: PizzaModel[] = [
        new PizzaModel(['red sauce', 'extra cheese'], 'S', new PriceModel(10.0)),
        new PizzaModel(['red sauce', 'cheese', 'pepperoni'], 'L', new PriceModel(18.50)),
        new PizzaModel(['white sauce', 'cheese', 'mushrooms'], 'M', new PriceModel(13.50)),
    ]

    addOrderItem(pizza: PizzaModel, quantity: number) {
        const orderItem = new OrderItemModel(pizza, quantity);
        console.log(`Adding ${quantity} to order - ${pizza.showDetails()}`);
        this.orderForm.items.push(orderItem);
    }

    // This is a specific student discount offered by Pizza Planet that is always 5% off
    applyStudentDiscount() {
        this.orderForm.applyDiscount(0.05);
    }

    // This is a specific military discount offered by Pizza Planet that is always 15% off
    applyMilitaryDiscount() {
        this.orderForm.applyDiscount(0.15);
    }

    displayTotal() {
        return this.orderForm.calculateTotal();
    }

    static showWelcomeMessage() {
        console.log('Welcome to Pizza Planet!');
    }

    static showMenu() {
        console.log('Here is our menu:');
        PizzaPlanetController.menu.forEach(i => {
            console.log(i.showDetails());
        });
    }
}