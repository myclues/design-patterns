import { Pizza } from "../pizza";

const DefaultTemperature = process.env.OVEN_TEMP || '400';

export class OvenService {
    // This private _instance lets us prevent users from creating multiple instances of our singleton.
    private static _instance: OvenService;

    // Example property that we might want to save.  For example, if the service calls out to a third-party 
    // endpoint, maybe we want to make sure it always points to the same base URL.
    private static ovenTemperature: string;

    // private to prevent users from using `new Singleton()` directly
    private constructor() {
        OvenService.ovenTemperature = DefaultTemperature;
        console.log(`Pre-heating oven to ${OvenService.ovenTemperature} degrees... Ready to bake!`);
    }

    /**
     * This is how you actually create a Singleton instance
     */
    public static getInstance() {
        console.log('\nAcquiring oven');
        // If we've already created the instance before, just return it
        if (this._instance) {
            console.log('The oven is already heated');
            return this._instance;
        } else {
            // Otherwise, if this is the first time in our app that we're encountering the Singleton, create it
            console.log('The oven is not heated yet');
            this._instance = new this();
            return this._instance;
        }
    }

    public bakePizzas(pizzas: Pizza[]) {
        console.log(`Baking ${pizzas.length} pizzas...`);
        pizzas.forEach(p => {
            p.bake();
        });
    }

    public getBakeTime() {
        console.log(`At ${OvenService.ovenTemperature} degrees, it will take ${16 / (parseInt(OvenService.ovenTemperature) / 100)} minutes to bake a pizza.`);
    }

    public changeTemperature(newTemperature: string) {
        console.log('Cranking oven to: ', newTemperature);
        OvenService.ovenTemperature = newTemperature;
    }
}
