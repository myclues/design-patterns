import { OvenService } from './singleton-service';

console.log('--- SINGLETON example ---');

console.log('Time to bake some pizzas but we only have one SINGLE oven');

const oven1 = OvenService.getInstance();
const oven2 = OvenService.getInstance();

oven1.getBakeTime(); // FirstOwner, e.g. Gollum
oven2.getBakeTime(); // also FirstOwner

oven1.changeTemperature('800');
oven1.getBakeTime(); // The oven is hotter now so it's shorter
oven2.getBakeTime(); // Second reference is also shorter because they're the same oven!

const oven3 = OvenService.getInstance();
console.log('\nAnd the third reference to the oven?');
oven3.getBakeTime(); // Already short

if (oven1 == oven2) {
    console.log('\nBoth oven1 and oven2 reference the same singleton instance!');
} else {
    console.error('\nBad example...');
}

console.log('--- Done ---');
