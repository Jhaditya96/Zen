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
let oper = [add,sub,mul]

	
function Initializing(a,c){
    //Initializing Values
    let x = 10 , y = 20;
	
	//Checking for the operation from oper
	 if(c == oper[0]){
	    let d =  add(x,y);
		return d;
    }
	 else if(c == oper[1]){
  	    let e =  sub(x,y);
		return e;
    }
     else if(c == oper[2]){
  	     let f =  mul(x,y);
		 return f;
    }
     else{
  	console.log("Invalid Option:Try Again!")
 }
}

 //Call Back function from Initializing function and returning value of operation
 function add(x,y){
 	return x+y;
 }
 function sub(x,y){
 	return x-y;
 }
 function mul(x,y){
 	return x*y;
 }

 let plus = Initializing(0,add);
 console.log(plus);
 let minus = Initializing(0,sub);
 console.log(minus);
 let multiply = Initializing(0,mul);
 console.log(multiply);
//end-here
});

