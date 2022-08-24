import {PizzaPlanetController} from './controller';

/**
 * For this demo view, we are just going to have a command line script output
 * some messages.
 * 
 * This could also be a React component with buttons, images, etc. that allows
 * user interaction for a dynamic view.
 */

PizzaPlanetController.showWelcomeMessage();

const orderController = new PizzaPlanetController();

PizzaPlanetController.showMenu();

console.log('Order some pizzas');

/**
 * We only use controller methods to modify the controller's state.
 */
orderController.addOrderItem(PizzaPlanetController.menu[0], 2);
orderController.addOrderItem(PizzaPlanetController.menu[1], 5);
orderController.addOrderItem(PizzaPlanetController.menu[2], 1);

console.log('Subtotal: ', orderController.displayTotal());

console.log("Ack! Too expensive!... but wait! I'm a student!");

/**
 * We have to use the controller methods because we can't access the orderForm directly.
 * Otherwise, customers could orderController.orderForm.applyDiscount(100)
 */
orderController.applyStudentDiscount();

console.log('New subtotal w/ student discount: ', orderController.displayTotal());

console.log('Still to expensive... join ROTC!');

orderController.applyMilitaryDiscount();

console.log('New subtotal w/ military discount: ', orderController.displayTotal());

console.log('Perfect!  Submit!');
