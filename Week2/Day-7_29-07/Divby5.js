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
function divisibleByFive(num1) {

    if(num1%5 === 0){return true;}
    else return false;
}
var divisible = divisibleByFive(5)
console.log(divisible);

//end-here
});

