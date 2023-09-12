// edi euta function bhira arko function use huncha vane teslai call back function vanincha 

let persons=[{
    name:"Sudip"
},{
    name:"Shyam"
}]

function dosomething(){
    console.log("do somethings")
}


    persons.forEach(dosomething);

    // foreach vanne euta call back function ho jasle function arguments ma lincha ani.. 
    // yo for loop jastai ho tara foereach ma sidai array ko sabbbai elements lai k kam garne vanera bujaucha  

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


// let say eha k vayo ta vanda foreach le sabbai array elements  haru lai linhca ani tyo elemnets lai k garne vanera vancha 


let db_users=[
    {
        name:"Aarab",
        email:"aaran2@gmail.com",
        password:"hell12345",
    },
    {
        name:"Aarati",
        email:"aarati2@gmail.com",
        password:"helli12345",
    },
]


// const loginUser = (email,password) =>{
//     db_users.forEach((db)=>{
//         if(db.email==email && db.password==password){
//             console.log("sussecfully login");
//             return; 
//         }else{
//             console.log("Sorry its not valid")
//         }
//     })
// }

const loginUser = (email,password) =>{
    for(let index=0;index<db_users.length;index++){
        if(db_users.email==email && db_users.password==password){
            console.log("Successfully Login")
        }else{
            console.log("Sorry Try Again!!")
        }
    }
}
loginUser("goes@gmail.com","yogesh12345")
loginUser("aaran2@gmail.com","helli12345")

// in aboove code there is one problem that it will show error 4 times 
// Sorry Try Again!!
// Sorry Try Again!!
// Sorry Try Again!!
// Sorry Try Again!!

const matched=false;
const loginnUser = (email,password) =>{
    for(let index=0;index<db_users.length;index++){
        if(db_users.email==email && db_users.password==password){
           matched=true;
        }
    }
    if(matched){
        console.log("Successfully Login")
    }else{
        console.log("try again")
    }
}

loginnUser("goes@gmail.com","hell12345") 

// CALLBACK Function 
let matchedd=false;
const loginnUserr = (email,password) =>{
  db_users.forEach((user)=>{
    if(user.email==email && user.password==password){
        matchedd=true;
     }
  })
    if(matchedd){
        console.log("Successfully Login")
    }else{
        console.log("try again")
    }
}
console.log("callbackpachiko part-----------------")
loginnUserr("aaran2@gmail.com","hell12345") 


function dotask1(callbackfunction){
    console.log("task one");
    callbackfunction()
}

const dotask2 = () =>{
    console.log("task")
}

dotask1(dotask2)