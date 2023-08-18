// let db_users=[];

//  function signupUser(name,email){
// let user={
//   name:name,
//   email:email
// }
// db_users[0]=user
// }
// signupUser("hello", "sudip@hey.com");
// signupUser("hello", "hey@hey.com");

// console.log(db_users)

// esko op ta [// [object Object] 
// {
//   "name": "hello",
//   "email": "hey@hey.com"
// }] esto aayo ni tara hamle ta duita push garna khojirako honi hai 

// ani .length vanne property le array bhitra kati ota array cha vanera dincha so..

let db_userss=[];

 function signupUser(name,email){
let user={
  name:name,
  email:email
}
db_userss[db_userss.length]=user;

// later on this is solve by push method....
}
signupUser("hello", "sudip@hey.com");
signupUser("hello", "hey@hey.com");
signupUser("hello", "hey@hey.com");
console.log(db_userss)

// operator in javascript..
 let number =10
 number=number+23;
 console.log(number)

//  mathi kko shortcut tala ko hai
 
number+=27;
console.log(number)

// increment and decrement operator

number++;
number--;
number++;
console.log(number)

// let say ahele ta op mathi ko number dekgaucha tara when you
// want key also then object ma deko rarmo  

console.log("before using post incerment ",number);
console.log("after  using post incerment ",number++);
console.log("after post incremnet teti bela nai incremnet ta dekhdaina but tyo katai gayera store vako huncha so ahele chai badyo",number);
console.log("agadi nai  ",++number)

// value assign garne bela chai = let say let a=5.. ani left hand side ra right side ko value equal cha vanera jananuna lai chai double == let a==b

       