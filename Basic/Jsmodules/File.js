const fileSys = require("node:fs");

console.log(fileSys);

// Sync....
fileSys.writeFileSync("txt.files/Sync.txt", "This is a Synchronous file.");

//Async....
fileSys.writeFile("txt.files/Async.txt", "This is a Asynchronous file.", (err)=>{ return err});

//Read Sync...
console.log(fileSys.readFileSync("txt.files/Demo.txt", "utf-8"));



// Read Async ...
fileSys.readFile("txt.files/Demo.txt", "utf-8", (err, result)=>{
     if(err){
          console.log("Error:",err);

     }else{
          console.log(result);

     }
});


//Append Sync...
fileSys.appendFileSync("txt.files/Demo.txt", "This is a node server" );

// Copy file
fileSys.cpSync("txt.files/Async.txt", "txt.files/copyfile.txt");

// Delete file
fileSys.unlinkSync("txt.files/copyfile.txt");

// Check  status...
console.log(fileSys.statSync("txt.files/Async.txt"));

//Also you can make directories or you can perform many operation in your files and folders like whatever you want. 






