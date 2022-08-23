# Common design patterns

[Design Patterns](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612) is a great reference for a lot of frequently-used programming patterns.

Here are some typescript examples of some of them.

You can see the examples in action by running `npm run all` or looking in `package.json` for the individual ones.

## Creational patterns

Patterns for creating new objects/instances.

1. [Factory](src/creational/01-factory/factory.README.md) - Great for stamping out repeated copies of basic objects
2. [Builder](src/creational/02-builder/builder.README.md) - Great for customizing objects that all conform to a standard base
3. [Singleton](src/creational/03-singleton-service/singleton-service.README.md) - For when you want just ONE of something throughout your entire app