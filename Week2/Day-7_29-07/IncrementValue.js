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
var myint = 0;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint)
console.log(myNextint);

//end-here
});

