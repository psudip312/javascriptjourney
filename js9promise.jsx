//    what would be esko output 
// first ma after aaucha and then products haru aaucha 
// tara eso herne vaye ta suru ma after hunu parne ho tara data fecthed vo ani after aayo cause ansynchorus function vayera usle aafu tyag garera aru lai kam garna diyo

// aba jasari fro bata hami forEacg ma gako thieo tesari nai async await ma await garne bela edi kei gari req gareko data haru dekhyena vane k garne ta vanne huncha so..


// chatgpt question i recently was reading tutorial he was teaching me async await and suddently he started to teach me promise is there any specifes reason to teach promise im abit confuse give me a context about it why do we nee to take concept ko promise in async await over here also say me if we dont use this what would be the consequences of it 


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

let promise= new Promise(()=>{
    
})
console.log(promise1)

// yo padnu vadna agadi exceptional handling padeko ramro haiii...
// so for now lets just pause promise and try to understand exceptinal handling hai umm java ma padeko jastai try catch hai 
 

// kunai pani error prone code garunu cha vane try catch lagayeko best ho 
// means euta system crash huna bata jogayo 

function hashpassword(password){
    manylogics
}

try{
    hashpassword(12232)
}catch(error){
    console.log(error.message)
}
console.log("helloworld1")
console.log("helloworld2")
console.log("helloworld3")

// mainly eslai lekhne tarika vaenko try ko bhitra eroor prone code rakhne edi error aayo vane catach le samathcaha 


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("server error")
        resolve("the promise has been complted/fulfilled/rsolved")
    }, 3000)
})

console.log(promise1)

promise1.then((response) => {
    console.log(response)
}).catch(err => {
    console.log(err)
})

// up code le k garcha vanese prmise garese kei kam suppose promise garese kei time lagcha
// time lagese sadai ramro response aaucha vanne hudaina if promise1 ko ressult k aaucha teslai .then le resolve garcha 


console.log("after promise...");

// react ma pi fetch haru sabbai promise ho 
// yo vanekai asynchrous function hao afu background ma gayera run huncha aru lai chalna dincha 


// .then() function asynchrous fucntion use hune bela use huncha 
