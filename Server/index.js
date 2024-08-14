//Node server setup

const Http = require("node:http");
const files = require("node:fs");
const Url = require("node:url");


const Server = Http.createServer((request, response)=>{
     // console.log(request.headers);
     const log = `\n${Date.now()}: Path : new request form ${request.url}`;
     const myUrl = Url.parse(request.url);
     console.log(myUrl);
     
     if(request.url == '/favicon.ico'){
          return response.end();
     }try{
          files.appendFile("./logs.txt", log, (err, result)=>{
               if(err){
                    return err;
               }else{
                    switch (request.url) {
                         case '/':
                              response.end("Hello from server");
                              break;
                         case '/about':
                              response.end("About page");
                              break;
                         default:
                              response.end("404: Not found : (");
                              break;
                    }
                    
               }
          });
     }catch(e){
          console.log("Ops! Something went wrong : (",e);
          
     }

});

Server.listen(8000, ()=>{
     console.log("Server stated...");
     
})

