# Common design patterns

[Design Patterns](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) is a great reference for a lot of frequently-used object-oriented-programming (OOP) patterns.

This repo contains some typescript examples of some of them.

You can see the examples in action by running `npm run all` or looking in `package.json` for the individual ones.

## OOP Pattern categories

- [Creational](#creational-patterns)
- Structural
- Behavioral

### Not quite OOP but still patterns

- [Model-View-Controller (MVC/MVVM)](./src/application-architecture/model-view-controller/README.md)


## Why use these patterns?

There are a few main reasons to conform to these common patterns:

- The software engineering community has discussed and iterated on many of these to handle a variety of scenarios.  Using one of these will give you a jump start and avoid having to reinvent the `WheelFacade`.
- If everyone uses similar patterns, a new teammate can see `FooService` and make some accurate assumptions about how it will be used.  If most of the codebase conforms to these patterns, there will be fewer homebrewed solutions for new teammates to learn.
- These patterns can also guide how code files are organized, e.g. grouping `MockDataFactories` together, which will help teammates know where to look if they're not quite sure where a bit of code exists.
- Using these will help avoid [antipatterns](src/antipatterns.README.md).

> Some of the common patterns have very subtle differences and a given implementation may fit more than one.  Don't sweat it!


## Avoiding the "namespace" antipattern

A popular antipattern is to collect somewhat-related functions into a namespace or file named something generic like `FooUtils.ts` or `FooFunctions.ts`.  They tend to be utility functions that take some standalone input and give some standalone output.

These often become catch-alls for a random assortment of functions.  It can be tempting to just throw functions into a `MyUtils.ts` instead of taking the time to really consider how to structure a feature, which can pile on massive tech debt over time.

[DayJS](https://day.js.org/) is an example of a good way to design this library.  It could have been a collection of `DateUtils` functions that all have something to do with dates.  However, it is designed to wrap native `Date` objects, and provide a standard way to work with them (`Decorator` or `Proxy` pattern).

### When might a namespace be good?

Sometimes there are generic methods that should be collected together, and are fairly limited in scope, so it's less likely to take on too much tech debt.  Some examples include:

- "StringUtils" - maybe has methods for formatting dates, capitalization, camel-casing, etc.  This could also be designed as a wrapper, like DayJS.  A likely reason for not doing so is `string` is simple native type so working directly with it is fairly straightforward, whereas `Date` is more complex and has more edge cases to account for.
- [Lodash.js](https://lodash.com/) - is a popular collection of various functions and sort of fits.  It would be more apparent if it were split into `lodash/CollectionUtils.ts` and `lodash/ArrayUtils.ts`, etc.


## Creational patterns

Patterns for creating new objects/instances.

1. [Factory](src/object-oriented-programming/creational/01-factory/README.md) - Great for stamping out repeated copies of basic objects
2. [Builder](src/object-oriented-programming/creational/02-builder/README.md) - Great for customizing objects that all conform to a standard base
3. [Singleton](src/object-oriented-programming/creational/03-singleton-service/README.md) - For when you want just ONE of something throughout your entire app