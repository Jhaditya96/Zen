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

let arrOfPow = [];
function powerOfTwo(num) {
  for(let i = 0 ; i < num ; i++){
      let x = Math.pow(2,i);
      arrOfPow.push(x);
      
  }
  return arrOfPow;
  
}

console.log(powerOfTwo(4).toString());

//end-here
});

