const { log } = require("console");
const fs = require("fs");
const { readFile } = require("fs/promises");
//data.writeFile("message.txt", "Hello from NodeJs!", (err) => {
//if(err) throw err;
   // console.log("The file has been saved");
//});


fs.readFile("message.txt", "utf8",(err,data)=>{
    if (err) throw err;
    console.log(data);
    
    
})