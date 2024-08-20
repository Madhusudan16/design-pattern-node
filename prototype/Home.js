
class Home { 
    /** 
     * default setting initialization 
     * @param string project_name
     * @return void  
     */
    constructor(name) {
        this.name = name || '';
        this.no_of_floor = 0; 
        this.no_of_room = 0; 
    }

    /**
     * Set no of floor 
     * @param int no_of_floor
     * @return void  
     */
    set floor(no_of_floor) { 
        this.no_of_floor = no_of_floor;
    }

    /** 
     * Set no of room 
     * @param int no_of_room
     * @return void
     */
    set rooms(no_of_room) {
        this.no_of_room = no_of_room;
    }

    /**
     * Print all configuration  
     * @return void
     */
    print() {
        const details = `
        ====================================
        = Owner Name: ${this.name}         
        = No Of Rooms ${this.no_of_room}    
        = No of Floors ${this.no_of_floor} 
        ====================================`;
        console.log(details);
    }

    clone() {
        const cpy = Object.getPrototypeOf(this); 
        const obj = Object.create(cpy);
        obj.no_of_floor = this.no_of_floor; 
        obj.no_of_room = this.no_of_room; 
        obj.name = this.name; 
        return obj;
    }


}

module.exports = Home;