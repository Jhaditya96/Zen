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
function isSameLength(word1,word2){
 // your code here
 if(typeof word1 === 'string' && typeof word2 === 'string'){
     if(word1.length == word2.length){
         return true
     }
     else{
         return false;
     }
     
 }
 else
  return -1;
}  
let checkLength = isSameLength("Apple","Banana");
console.log(checkLength);

//end-here
});

