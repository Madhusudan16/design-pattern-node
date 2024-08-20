/**
 * Logger class handle all system logs
 * @var array logs  - store all logs in this variable  
 */

class Logger {

    // Initiate default settings 
    constructor() {
        this.logs = []; 
    }

    /**
     * Get the length of logs and return it
     * @param void 
     * @return int  
     */
    count() {
        return this.logs.length;
    }

    /**
     * Set new logs data in logs variable before push we add timestamp front of msg
     * @param msg   
     * @return void 
     */ 
    add(msg) {
        if (msg.trim().length == 0) return; 
        msg = new Date().toISOString() + " : " + msg.trim();
        this.logs.push(msg);
    }

    /** 
     * Get list of logs 
     */
    print() {
        if (this.count() == 0) {
            console.warn("................No Log to display................"); 
            return;
        } 
        this.logs.map((log, index) => {
            console.log("Index " + index + " : " + log);
        });
    }

}

/**
 * Creating singleton class  
 */
class Singleton {
    constructor() {
        if (!Singleton.instance)
            Singleton.instance = new Logger;
    }

    getInstance() {
        return Singleton.instance;
    }
}


module.exports = Singleton;
// module.exports = new Logger;  //this one also create singleton instance