# Model-View-Controller

The MVC pattern is meant to help organize files and code at the application level.  Each part specializes in some aspect of the app, to draw some clearer lines between what belongs in each part.

- Model: Defines how data objects are structured
- View: Defines what is presented to the end-user
- Controller: Encapsulates logic and behavior of actions that occur in the app

Usually a given feature of an application will have 1 Controller, 1 View, and 1+ Models.

> An updated version of this is the Model-View-ViewModel (MVVM) which has subtle differences.

## Pizza Scenario

Imagine a simple online ordering system that lets you select which combo meal to order.  To implement this, you may need the following

*Models*:

- OrderFormModel - the main model for this screen
- OrderItemModel, PizzaModel, PriceModel - additional models to represent data objects

*View*:

- OrderFormView

*Controller*

- OrderFormController

View the `*.ts` files in this example folder for more details.