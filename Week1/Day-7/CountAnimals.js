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
function CountAnimals(tur,horse,pigs) {

    return (tur*2+horse*4+pigs*4);
}
var legs = CountAnimals(2,3,5)
console.log(legs);

//end-here
});

