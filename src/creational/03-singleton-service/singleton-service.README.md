# Singletons

Typically use a singleton where you want the same configuration/options throughout your app.

## Typical Examples

- Application-wide configuration options
- "Services" that reach out to a third-party integration in the same way each time, e.g.

    - Logger (if you want just one global logger)
    - Monitoring (you probably only want one monitor)
    - Emailer (you probably want emails to always use the same basic options)

## Pizza Scenario

