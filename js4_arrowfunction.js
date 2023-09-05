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
CHINNA LAI BEST WAY VANEKO => HUCNAH
also arrow function ma hoisting hudaina .. banaunu vana aadgi cal lgaryo vane error aaucha
6/u
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
// let sum = (num1, num2) => {
//     console.log(`${num1} + ${num2} = ${num1 + num2}`)
// }


// sum(5, 10)
// sum(50, 100)

// next day

let db_users=[];
// function hashpassword(){
//     return "NDSJANK86547##"
// }
// const hashpassword =(password)=>{
//     return password+Date.now();
// }

// also now arrow function already returns value in one line so no need to write return too 
const hashpassword = (password) =>  password + Date.now(); 



// function signupUser(name,email,password){
//     db_users[db_users.length]={
//         // alternative way vaneko db_users.push({})
//         // ani push vanne method chai array ma matra use huncha hai

//         name:name,
//         email:email,
//         password:hashpassword(password),

//     }
// }
let signupUser = (name,email,password) =>{
    db_users[db_users.length]={
                // alternative way vaneko db_users.push({})
                // ani push vanne method chai array ma matra use huncha hai
        
                name:name,
                email:email,
                password:hashpassword(password),
}
}

let namee="sudip"
let emaill="hssljd"
let passwordd="dfsfd"

signupUser(namee,emaill,passwordd)
// if kei kura laready defined cha vane chai mathi jasto "" yo brakcet bhitra rakhnu pardaina lese parcah hai 

signupUser("hello","hsdhwd","ndsfnsdd234554")
signupUser("hfhfgh","hsdhwggggggggd","ndsfnsggddd234554")
signupUser("hddfhdhe","hsdhfgggwd","ndsfnsddggggggggggdddddddd234554")


console.log(db_users)
 
//RETURN KEYWORD
// now euta function bata kunai value haru bahera nikalna ko lagi we use return keyword 


function sum (num1,num2){
    return num1+num2
}
console.log("sum is ",sum(1,2))
// now there is differenc  between call by this and this has
// sum("sudip","hekee")
// sum(sudip,jdks) esma sudip k ho ta kasari bujcha ta esle 
// sum(1,2) number ra string chai predefined huncha hai 


// var bata vaneko keyword haru js le top ma lagera rakhdincha 

delUser();

const delUser = () =>{
    console.log("user has been deleted")
}

// const delUser pani ta euta variable declare vaye jastai ho ho ani jasari var le eeror phalcha tesari nai esle pani error phalcha 


let countryCode =[
    {
"code":"np",
"CountryName":"Nepal",
"path":"nepal"
    }
]

let findCounrty = () =>{
    console.log(`${countryCode[0].code}`)
}
findCounrty();