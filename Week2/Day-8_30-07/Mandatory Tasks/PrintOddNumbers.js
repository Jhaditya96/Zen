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
  console.log((function(a,b){
  let arrodd = [];
  for(let x=0;x<b;x++){
      let num = a;
      arrodd.push(num);
      a=a+2;
  }
  return arrodd;
})(1,5));
//end-here
});
