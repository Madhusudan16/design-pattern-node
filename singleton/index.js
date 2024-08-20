const Logger   =  require("./logger.js"); 
const Employee = require("./employee.js"); 
const logger = new Logger().getInstance();


logger.add("log started........"); 

const alex = new Employee("EP001", "Alex"); 
const david = new Employee("EP002", "David"); 

alex.punch();
david.punch();

alex.apply_leave();

alex.punch(false); 
david.punch(false);

logger.add("log ended........");

console.log("No of logs request: " + logger.count()); 
logger.print();