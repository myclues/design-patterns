# Singletons

* Class: [singleton-service.ts](./singleton-service.ts)
* Usage Example: [singleton-service-example.ts](./singleton-service-example.ts)

> The class and example are named `singleton-service.*` because "service" is another common concept that is often implemented as a singleton.

Typically use a singleton where you want the exact same configuration/options throughout your app.

## Typical Examples

- Application-wide configuration options
- "Services" that reach out to a third-party integration in the same way each time, e.g.

    - Logger (if you want just one global logger)
    - Monitoring (you probably only want one monitor)
    - Emailer (you probably want emails to always use the same basic options)

## Pizza Scenario

I finally landed that job working at a pizza shop with a few others.  But we're a small mom and pop place with only one oven so I just put all the toppings on and hand it off to the oven guy to actually cook.  The oven guy has everything set up the way he likes it so I just give him my input pizza, and he provides the service of baking my pie.