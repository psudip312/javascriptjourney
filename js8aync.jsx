// In JavaScript, a synchronous task is like solving math problems sequentially. Code is executed line by line, and each line of code must finish executing before the next one starts. 
// https://chat.openai.com/share/1008d450-9337-4d36-9a11-ae840a92d7db

function dotask1(callbackfunction){
    console.log("task one");
    callbackfunction()
}

const dotask2 = () =>{
    console.log("task")
}

dotask1(dotask2)

// sabbai code haru line by line run huncha 
// sabbai kam palai palo huncha 

const showPop = () =>{
    console.log("3 sec pachi chalyo... even though sabbai code serially nai chalyo tara yo asyanchronnous vayo cause first ma chalyo ani gayo")
 }


// setTimeout(showPop,3000);


setTimeout(()=>{
    console.log("showpop up ",3000)
})

// up example is of anonomous function 
 console.log("1")
 console.log("2")
 console.log("3")
 console.log("4")


 /* code runs line by line in synchrouns whereas in asynchrous code run in background 
 don't blaock remaining codes
 */


let fruits =["apple","orange","banana"]
function printInfo(){
    console.log("fruits info")
}
fruits.forEach((fruit,index)=>{
    console.log("fruit is",fruit,index)

})

//  array ma push ra pop garne function haru

// async and synchrous 
console.log("-----------------------")
function sum(num1,num2){
    console.log("sum is :",num1+num2)
}
console.log("1")
console.log("2")
console.log("3")
console.log("4")
sum(1,2)
// set timeout euta call back function ho eslai kei callback function chayincha
function callMeBack(){
    console.log("Hey I'm Back!!!!")
}
setTimeout(callMeBack,3000);
setTimeout(()=>{
    console.log("This method works too")
},6000);



for(index=0;index<10;index++){
    console.log("index is ",index);
}



// mathi ko conecpt nai euta asynchronous function ho for loop agadi nai run vairako cha 
// asynchnous function haru background ma kam garcha tara aru lai harm garna didiana 

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))


   console.log("after")
   
//    what would be esko output 
// first ma after aaucha and then products haru aaucha 
// tara eso herne vaye ta suru ma after hunu parne ho tara data fecthed vo ani after aayo cause ansynchorus function vayera usle aafu tyag garera aru lai kam garna diyo

// aba jasari fro bata hami forEacg ma gako thieo tesari nai 

// PROMISE
// promise 1 chai promise vanne function ko euta object ho 

/* Promise
hamle kasalai euta promise gareko jastai ho like kaslai ma gardinchu vannu ko matlab pending vo 
resolve garese vaneko kam gare vaneko vayo ra reject vanko vaneko kam kahele kai
nahuna ni sakcha so .. tala promise has 3 stages vaneko ho

        stages 
            - pending
            - resolve
            - reject
*/

let promise1= new Promise(()=>{
    
})
console.log(promise1)