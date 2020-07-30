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
console.log(getDistance(3,4,4,3));
function getDistance(x1, y1, x2, y2)
{
    let ycor = Math.py2-y1;
    let xcor = x2-x1;
 return (Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)));
}
//end-here
});

