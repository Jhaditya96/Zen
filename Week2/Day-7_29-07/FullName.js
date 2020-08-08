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
function getFullName(firstName, lastName){
 // your code here
 if(Number.isInteger(firstName)||Number.isInteger(lastName)){
     return -1;
 }
 else {return firstName+" "+lastName;}
}
var fullname = getFullName("Guvi","Geek")
console.log(fullname);

//end-here
});

