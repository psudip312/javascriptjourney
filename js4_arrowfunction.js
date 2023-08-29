/* 
    function <functionName>(<pareamter>,<pareamter>) {
            console.log("do something")
    }
    functionName()
*/
/* 
    function sum(num1, num2) {
        console.log(num1+num2)
    }

    sum(1, 2) 
    sum(10, 2) 
*/
/*  
     arrow function 
     fat-arrow function 

     syntax
     let <functionName> = (<parameter>,<paremeter> ) => {
        console.log("do somehting...")
     }

*/

function sum (num1,num2){
    let sumTotal=num1+num2
    console.log("Sum is",sumTotal)
}
sum(5,10)



// below the name of the function is sum 
let sum = (num1, num2) => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
}


sum(5, 10)
sum(50, 100)