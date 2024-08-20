
class Visitor { 
    /**
     * Add visitor details
     * @param {*} name 
     * @param {*} reason 
     */
    constructor(name, reason) {
        this.name = name; 
        this.reason = reason;
        this.type = Visitor.name;
    }
}

module.exports = Visitor;