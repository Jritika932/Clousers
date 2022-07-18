// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function Area(){
         let length=3;
         function innerfunction(){
             let breadth=5;
            let result=length*breadth;
             console.log(result);
    
         }
     innerfunction()
   }
    Area()