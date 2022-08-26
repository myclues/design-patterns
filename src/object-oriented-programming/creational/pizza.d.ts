export type PizzaType = 'plain' | 'veggie' | 'meat' | 'supreme';
export type PizzaStatus = 'raw' | 'baked';

interface Pizza {
    toppings: string;
    status: PizzaStatus;

    getToppings: () => string;
    bake: () => void;
}

