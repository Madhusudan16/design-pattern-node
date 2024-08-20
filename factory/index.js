const userFactory = require("./userFactory");

const alex = userFactory("Alex Hales", 20, "Web Developer", "Employee"); 
const roy = userFactory("Roy",0, `Visited to meet ${alex.name}`);

console.log(JSON.stringify(alex));
console.log(JSON.stringify(roy));