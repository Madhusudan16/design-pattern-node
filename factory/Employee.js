
class Employee { 
    
    /**
     * set basic employee details
     * @param {*} name 
     * @param {*} bal 
     * @param {*} note 
     */
    constructor(name, leave_bal, role) {
        this.name = name; 
        this.leave_bal = leave_bal; 
        this.role = role; 
        this.type = Employee.name;
    }
}

module.exports = Employee;