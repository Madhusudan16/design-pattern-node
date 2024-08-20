const home_clone = require("./clones/home_clone");

const alex_home = home_clone.clone(); 
alex_home.name = "Alex";


const joy_home = home_clone.clone(); 
joy_home.name = "JOY";
joy_home.rooms = 3;

alex_home.print();
joy_home.print();