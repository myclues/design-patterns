# Builder

* Class: [builder.ts](./builder.ts)
* Usage Example: [builder-example.ts](./builder-example.ts)

Builders are useful when you need to create a complex object but do not have all of the constructor inputs immediately, or if you need to separate the different parts in another file /context.

They let you instantiate a baseline object template, and gradually set options that you want to customize it with, and finally confirm ("build") the completed output later.

## Typical Examples

- Query builders

## Pizza Scenario

&Pizza, Mod Pizza, etc. all let me start with a base, select toppings, and finally send it through the toaster oven to "build" it.  Time to load up on hot honey!