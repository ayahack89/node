function Calculator(){
     function Addition(numOne, numTwo){
          return numOne + numTwo;
     }
     function Subtraction(numOne, numTwo){
          return numOne - numTwo;

     }
     function Multiplication(numOne, numTwo){
          return numOne * numTwo;
     }
     function Division(numOne, numTwo){
          return numOne / numTwo;
     }
     function Modulo(numOne,numTwo){
          return numOne % numTwo;
     }
     return {
          Addition:Addition,
          Subtraction:Subtraction,
          Multiplication:Multiplication,
          Division:Division,
          Modulo:Modulo,
     }
}
module.exports = {
     Calculator,
}