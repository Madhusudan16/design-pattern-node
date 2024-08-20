1. Defination:
   The singleton design pattern is a creational design pattern that ensures a class has only one instance and that all other classes can access it globally.

2. Advantages
   i) Single Instance
   Ensures that only one instance of a class is created, which can help avoid conflicts in shared resource management.
   ii) Global Access
   The singleton instance can be accessed globally which can simplify interactions with shared methods and properties.
   iii) Lazy Initialization
   This pattern supports creating the instance only when needed, which can potentially enhance performance.
   iv) Thread Safety
   A thread safe singleton allows safe access in multi-threaded environments.
   v) Reduce Memory
   This pattern can reduce memory usage by sharing a single instance across the application.

3. Usages
   The singleton design pattern can be useful in scenarios like managing configuration settings, single database connection, logger etc.

4. Example
   In our code I have created singleton pattern in logger method and it is used across other files.

5. Given Code Output
   Index 0 : 2024-08-20T06:35:09.250Z : log started........
   Index 1 : 2024-08-20T06:35:09.267Z : Alex(EP001) has punched IN at 2024-08-20T06:35:09.267Z.
   Index 2 : 2024-08-20T06:35:09.267Z : David(EP002) has punched IN at 2024-08-20T06:35:09.267Z.
   Index 3 : 2024-08-20T06:35:09.267Z : Alex(EP001) has requested for leave.
   Index 4 : 2024-08-20T06:35:09.267Z : Alex(EP001) has punched OUT at 2024-08-20T06:35:09.267Z.
   Index 5 : 2024-08-20T06:35:09.267Z : David(EP002) has punched OUT at 2024-08-20T06:35:09.267Z.
   Index 6 : 2024-08-20T06:35:09.267Z : log ended........

Note: If we create instance of class and assign to module.exports then Node.js handles this by caching the instance, ensuring that all parts of the application share the same one.
ex. module.exports = new Logger;
