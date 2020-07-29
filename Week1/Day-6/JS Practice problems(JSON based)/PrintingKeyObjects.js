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
                name: 'Rajnikath',  
                age: 33,  
                hasPets: 'yes'
            }; 
              
            function printAllValues(obj){ 
                var string = ''; 
  
                for(var prop in obj) { 
                        string+= prop+" "; 
                     
                   
                } 
  
                return string; 
            } 
            console.log(printAllValues(obj))
            
//end-here
});