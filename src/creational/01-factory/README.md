# Factory

* Class: [factory.ts](./factory.ts)
* Usage Example: [factory-example.ts](./factory-example.ts)

Factories are very basic patterns for reliably creating the same "thing" again and again with no frills or variations.  Think preset data options.

They provide a common interface for instantiating objects dynamically, instead of having to instantiate differently.  Example

```
const types = ['MockUser', 'MockPizza', 'MockTopping'];
const objects = type.map(type => PizzaFactory.create(type));

// objects:
// [MockUser, MockPizza, MockTopping]
```

## Typical Examples

- Mock testing data
- Stamping out something like badges/achievements in a game?


## Pizza Scenario

Yum!  Pizza!  I'm not a great cook though, so I just get the frozen pizzas from the store.  I can't customize my toppings so all I get is the premade kind.