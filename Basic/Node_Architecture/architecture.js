/*
The node.js handel the request using blocking and non-blocking process.
*/
const mod = require("node:fs");
// console.log(mod);


//Blocking (Sync)...
console.log("Execute: 1");
const BlockResult = mod.readFileSync("txt.files/Contact.txt", "utf-8");
try {

     console.log(BlockResult);
} catch (e) {
     console.log("Ops something went wrong : (", e);

}
console.log("Execute: 2");



//Non-Blocking (Async)....
console.log("Execute: 3");
mod.readFile("txt.files/Contact.txt", "utf-8",
     (err, result) => {
          if (result) {
               try {

                    console.log(result);


               } catch (e) {
                    console.log("Ops something went wrong : (", e);

               }
          } else {
               console.log(err);

          }

     });
     
console.log("Execute: 4");


