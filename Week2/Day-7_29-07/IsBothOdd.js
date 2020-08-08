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
function areBothOdd(num1,num2){
 // your code here
 if(!Number.isInteger(num1 && num2)) { return -1; }

 else if(num1 % 2 !== 0 && num2 % 2 !== 0)
 {
     return true;
     
 }
 else {return false;}
 
}
var odd = areBothOdd(1,4)
console.log(odd);

//end-here
});

