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
function isEven(num){
 // your code here
 if(!Number.isInteger(num)){return -1;}
 else if(num%2 === 0){return true;}
 else if (num%2 !== 0){return false;}
 
}
var even = isEven("5a")
console.log(even);

//end-here
});

