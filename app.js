
let arg = process.argv;

for(i=2; i<arg.length; i++) {

    console.log("",arg[i]);
}

const cal = require("./math");

console.log(cal);
