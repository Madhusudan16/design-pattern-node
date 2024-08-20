const Employee = require("./Employee"); 
const Visitor = require("./Visitor"); 
/**
 * Base on type create instance of appropriate class
 * @param {*} name 
 * @param {*} leave 
 * @param {*} detail 
 * @param {*} type 
 * @return instance of class
 */
const userFactory = (name, leave = 0, detail, type) => {
    if (type == Employee.name)
        return new Employee(name, leave, detail);
    else
        return new Visitor(name, detail);
}

module.exports = userFactory;