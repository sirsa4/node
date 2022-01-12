//Globals

//__dirname - path for current directory
//__filename - filename

//require - Moduels function
//module - info about current modul
//process - info about enviroment program is excuted at

console.log(__dirname);
//show the file path
//C:\Users\hassa\Desktop\objects\node> 
console.log(__filename);
//shows node.js

console.log(module);
//shows module object with loaded status being false

console.log(require);
// also shows false status

console.log(process);
//also shows alot unknown

//setInterval
setInterval(()=>{
    console.log('Hello World');
},1500);

