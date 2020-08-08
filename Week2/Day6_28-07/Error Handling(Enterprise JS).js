Q.Rules for Error Handling?
Soln.Rules:
#Rule 1:Assume your code will fail
#Rule 2:Log errors to the server
Simple Logging
function log(sev,msg){
   var img = new Image();
   img.src = "log.php?sev=" +
        encodeURIComponent(sev) +
	  "&msg=" +encodeURIComponent(msg);
}
//usage
log(1, "Something bad happened.");

#Rule 3:You,not the browser,handle errors
a.try-catch
try{
    operation();
} catch(ex){
    log(2,"operation() failed:" + ex.message);
} finally{
   default operation();
}

b.window.onerror
-Last stip before browser responds.
-Return true to indicate not to respond.
-Only supported in IE and Firefox.

e.g.windows.onerror = function(msg,url,line){
	log(a,msg);
	return true;
};

=>Error Lifecycle

  Browser Error => window.error => try-catch => Error

#Rule 4:Identify where errors might occur

Type Of Errors

-Type coercion errors
if(null){/*never executed*/}
if(0){/*never executed*/} 
if(""){/*never executed*/}	

if("hi"){/*executed*/}
if(-1){/*executed*/}
if({}){/*executed*/}

alert(5 == "5")//true
alert(5 === "5")//false
alert(1 == true)//true
alert(1 === true)//false
      
-Data type errors
Often occurs with funtion arguments
Typically a sympton of insufficient value checking
e.g. funtion sortArray(values){
	if(values != null){
	     values.sort(funtion(a,b){
		return b-a;
		});
	}
}

Fixed:
function sortArray(values){
 if(values instanceof Array){
   values.sort(function(a,b){
     return b-a;
   });
 }
}

-Communication errors
-Invalid URL/Post data(Typically long string concatenations,Make sure parameters are named correctly).
-Server response status(200 isn`t the only valid status that may be returned(beware of 304),any other status means you didn`t get data).
-No network connection(IE will throw error if calling open() but then goes normal lifecycle).
-Server response content(often returns HTML,if possible set status to 500).

#Rule 5:Throw your own errors
Throw or Try-Catch
-Errors should be thrown in low-level parts of the application
 -Utilities,core libraries, etc.
-Use try-catch blocks in higher level parts 
 -Application=specific
 -Client-side business logic

#Rule 6:Distinguish fatal versus non-fatal.
Won`t interfere with user`s main tasks.
Recovery is possible.
Don`t tell users not working unless absolutely necessary.

-Fatal Errors
The application absolutely cannot continue.
Significat interfernce with user`s ability to be productive
Message the user immediately
Reload

Fatal or Non-fatal?
Don`t allow your code to determine what is and is not fatal(watch out for loops)

#Rule 7:Provide a debug mode
-Assign a variable that is globally available
-try-catch should re-thrown the error
-window.onerror should be false
-Allow the browser to handle the error
e.g.
for(let i=0;i<mods.length;i++){
 try{
   mods[i].init();
 } catch (ex) {
     if(debugMode){
        throw ex;
  } else {
      log(2,"Module"+i+"failed.");
  	}
 }
}



