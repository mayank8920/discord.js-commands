# How To Make A Json Api On repl.it

### Firstly, Create A New Repl I'm Sure You Know How To So I'll Be Skipping This Part
### There Are Two Ways To Do This, Create A NodeJS Repl Or Html/css/js Repl
### I'm Going To Use NodeJS Repl
### Starting Of With Index.js File 
```
const express = require("express"); 
const app = express(); 
```
### We'll Need To Do **__npm i express__**
### Then You Have To Make A JSON File, Name It Anything 
```
[
{"image":"url"},
//Repeat This With As Number Of Times You Want 
]
```
### And We're Done With JSON File
### Next We're Back To Main File
```
const somethingyouwant = require("./filename.json")
app.get("/somethingyouwant", (req, res) => {  
var item = somethingyouwant[Math.floor(Math.random() * somethingyouwant.length)];   
res.json(item); 
}); 
const listener = app.listen(8080, () => {   
  console.log("Your app is listening on port " + listener.address().port); 
});
```
### And You're Done With Api, Now You Can Access It At https://yourrepladdress/somethingyouwant
### Lastly Making It 24/7 You Can Look At Another Guide
[Make Your Repl 24/7]()
