const Logger = require("./logger"); 
const logger = new Logger().getInstance();

class Employee { 

    /**
     * Set default employee details
     * @param {*} id 
     * @param {*} name 
     */
    constructor(id, name) {
        this.id = id; 
        this.name = name; 
    }

    /**
     * Punch in out request handle
     * @param {*} is_in  is false then consider as OUT 
     * @return void; 
     */
    punch(is_in = true) {
       const msg = `${this.name}(${this.id}) has punched ${is_in ? "IN" : "OUT"} at ${new Date().toISOString()}.`;
        logger.add(msg);
    }
    
    /**
     * Request for new leave 
     * @param void 
     * @return void
     */
    apply_leave() {
        const msg = `${this.name}(${this.id}) has requested for leave.`; 
        logger.add(msg);
    }
}

module.exports = Employee;