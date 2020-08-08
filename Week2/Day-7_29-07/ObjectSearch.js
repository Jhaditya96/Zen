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

var obj = {
 "key": "HouseKey",
 "name":"John",
 "sirname":"Doe",
 "Gender":"Male"
};
console.log(getProperty(obj,"sirname"));
function getProperty(obj, key) {
 // your code here
 let x = Object.keys(obj);
 for(let i=0;i<x.length;i++){
     if(x[i] == key ){
        return Object.values(obj)[i];
     }
 }
 return "NA";
}
//end-here
});

