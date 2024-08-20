1.  Defination:
    Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory method lets a class Defer instantiation to subclasses.

2.  Advantages
    i) Loose coupling
    The pattern encourages loose coupling by separating the object creation logic from the bussiness logic. This means that the code only interacts with the interface or abstract class, so it will work with any classes that implement that interface or extend that abstract class. For Example, the client program is unaware of changes to the PC class implementation, so it can be easily changed.

    ii) Encapsulation
    The pattern encapsulations the object creation process, so changes to the creation process don't impact the rest of the code.

    iii) Code Reuse
    The pattern promotes code resuse by allowing multiple classes to share a common interface. For ex. common creation logic can be defined in superclass methods.

    iv) Extensibility
    New product types can be added without modifying existing code. Fox example, an order modify factory can be created that returns an order notifier based on a user's notification preference. If the user`s preference changes, order service doesn't need to be updated.

    v) Centralized point of control
    The pattern provides a centralized point of control for object creation, which can make maintenance and testing easier.

    vi) Improved readability and maintainability
    The pattern can improve the readability and maintanability of the code.

3.  Given Code Output
    {"name":"Alex Hales","leave_bal":20,"role":"Web Developer","type":"Employee"}
    {"name":"Roy","reason":"Visited to meet Alex Hales","type":"Visitor"}
