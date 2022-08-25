import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {OrderFormModel, OrderItemModel, PizzaModel, PriceModel} from './model';

/**
 * Our ViewModel!
 * What a user sees is not always exactly what is in the database.  Often there are multiple MODELS
 * in a given VIEW that are composed together, sometimes with supplemental data that isn't directly
 * stored in the model itself.
 * 
 * p.s. The JSX part of react components can be very lean and simple to give a quick visual idea of what
 * will be rendered to the end user.  All the logic, functions and subcomponents can be factored out
 * to keep this clean and easy to read at a glance.
 */
const PizzaPlanetViewModel = () => {
    const [state, setState] = useState<IPizzaPlanetState>([]);

    /**
     * The state and state.menu are part of the PizzaPlanetViewModel MODEL, but the fact that we
     * fetch it with an API call is CONTROLLER logic and NOT part of the MODEL.
     */
    useEffect(async () => {
        const menu = await fetchMenu();
        setState({
            ...state,
            menu: menu,
        });
    })    

    /**
     * The JSX component is the VIEW of our ViewModel
     */
    return (
        <>
            <Menu menuItems={state.menu} />
            <hr />
            <OrderForm currentOrder={state.currentOrder} />
        </>
    )
}

/**
 * The state is the big picture MODEL of our ViewModel
 * (it is composed of additional models)
 */
interface IPizzaPlanetState {
    menu: PizzaModel[]
    currentOrder: OrderFormModel
}

export default PizzaPlanetViewModel;


/**
 * Additional components
 * 
 * You can break out smaller components for many different reasons:
 * - They have their own complex logic internal to themselves
 * - They will be reused elsewhere
 * - They will only be used in the main component, but keep it easier to read
 */

/**
 * <OrderForm /> is broken out becaus eit has some of its own logic, e.g. the 
 * pre-discount subtotal.  We may also put interactive handlers like buttons to click 
 * to add items, etc. here.
 */
const OrderForm = ({currentOrder}) => {
    const {items, discountApplied} = currentOrder;

    /**
     * The pre-discount subtotal is an extra "property" of the order form that is not
     * saved explicitly in the MODEL.  It is data that is useful in the VIEW to users.
     */
    const calculatePrediscountTotal = (orderItems: PizzaModel[]) => { /* math */ }
    
    return (
        <div className="orderForm">
            <h2>Cart</h2>
            <ul className="items">
                {items && items.map((orderItem: OrderItemModel, idx: number) => {
                    <li key={idx}>
                        <h3>Quantity: {orderItem.quantity}</h3>
                        <div>{orderItem.item.showDetails()}</div>
                        <div>{orderItem.calculateSubtotal()}</div>
                    </li>
                })}
            </ul>
            <hr />
            <div>
                <h3>Sub-total:</h3>
                <span>{calculatePrediscountTotal(items)}</span>
                
                <h3>Discount:</h3>
                <span>{discountApplied * 100} % off</span>

                <h2>Total:</h2>
                <span>{currentOrder.calculateTotal()}</span>
            </div>
        </div>
    )
};

/**
 * <Menu /> has no complex logic but makes the main component easy to read.
 */
const Menu = ({menuItems}) => (
    <div className="pizzaMenu">
        {!menuItems.length 
            ? (
                <h2>No pizzas found.</h2>
            )
            : (
                <ul className="menuItems">
                    {menuItems.map((pizza: PizzaModel, idx: number) => {
                        <li key={idx}>{pizza.showDetails()}</li>
                    })}
                </ul>
            )
        }
    </div>
)


/**
 * Business logic (helper) methods for this component - often separated into a "CONTROLLER" file.
 */
const fetchMenu = async () => await axios.get('/api/menu').then(res => (res.data));