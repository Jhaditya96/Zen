const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
//start-here
var mystr = "1000";
function toInteger(mystr) {

    return mystr;
}
var myint = toInteger(mystr)
console.log(myint)

//end-here
});

