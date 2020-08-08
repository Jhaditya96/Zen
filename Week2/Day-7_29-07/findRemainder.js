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
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(-9,45)
console.log(res);

//end-here
});

