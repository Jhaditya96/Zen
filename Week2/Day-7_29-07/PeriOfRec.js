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
function findPerimeter(num1,num2) {
 
 return 2*(num1+num2);   
}
var peri = findPerimeter(6,7)
console.log(peri);

//end-here
});

