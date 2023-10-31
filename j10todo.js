// localStorage le key value pair ma khojcha hai
// .JSON. stringify le array lai string bhitra rakcha

// let a = localStorage.setItem();
// again jSON.parse le chai again uta vako testo form lai peri pahela jastai parcha s

// SPREAD OPERATOR

let age1 = 10;

let ag2 = age1; //age2 eha 10 nai cha
// tara aba eha reinitialise vaese age 2 change huncha
ag2 = 20;
console.log({ ag2 });

let fruit1 = "apple";

let fruit2 = fruit1;
fruit2 = "orange";
console.log({ fruit1 });
console.log({ fruit2 });

console.log("------------------");

let per1 = {
  name: "ram",
  dob: "1998",
  address: "sukedhara",
};

// let per2 = {
//   name: "Shyam",
//   dob: "2000",
//   address: "Kapan",
// };

let per2 = per1;

per2.name = "SudipBaba";

console.log(per2);
console.log(per1);

// bro aba ta eha serious issue aayo ta per2 ko change gareko cha tara per1 ni change vayo ta kinaa

// cause array and object are reference data type...

// fanda k ho vane per1 sysyetm ko kunai euta memory location ma gayera basirako cha
// aba per2=per1 le or per2 le pani per1 ko memory location lai nai point out garirako cha
// or simply vanne vane per2 does have the copy of per1 values,rather per2 is pointing to the location of per1

let per3 = per2;
console.log(per3);

// also peri eha pani same nai huncha.. eslai kasari solve garne ta

let per4 = {};

console.log({ per4 });

per4 = { ...per1 };
console.log(per4);
per4.name = "changename";
console.log(per4);

// also this can be used while you are passing argumnets onn functions

const CalculateSum = (num1, ...rest) => {
  console.log(num1);
  console.log(...rest);
};

CalculateSum(1, 2);
CalculateSum(1, 2, 4, 453, 342, 3);

let arr = [1, 2, 3, 4, 5];

let doubledArray = [];
let doubleddArray = [];

arr.forEach(function (item) {
  doubledArray.push(item * 2);
});

console.log(doubledArray);

arr.forEach(() => {
  console.log("loop");
});

// esko output: loop loop loop loop huncha

arr.forEach((humber) => {
  doubleddArray.push(humber * 2);
});
console.log(doubleddArray);

// array .map function le euta naya array banayera value return gardincha
// ahele samma or foreach lai mathi euta array store garna ko lagi doubedaraay vanne variable initialize garnu paryo tara .mapp le chai already tyo kura haru euta specific array ma nai store garidincah
// .map returns new araay with exact same length as our original array
alreadybanayekoarray = arr.map(() => {});
// k advantage vayo ta esma aba esma push method pani use garnu parena for loop vanda forEach better yo vanda .map better
// map function le original array lai change garaudaina taara aagi push le ta sidai original array nai change garauthieo

console.log(alreadybanayekoarray);

// kei kura filter garnu cha vane array bata for EAch lagako ramro cause .map le ta jsata ko testai naya array banayera dine kam ho

let evennNumbers = [];

arr.forEach((number) => {
  if (number % 2 == 0) {
    return evennNumbers.push(number);
  }
});
console.log(evennNumbers);

// basically array lai modify garnu pare map

// aba roblem k aayo vanda map ma suppose hamlai forEach jastai kam garu paryo vane kasari garne ta
// it can be solve by filter function
// tara esle return cha true ra false garcha

let numbers = [2, 3, 4, 5, 10, 20];
let evenNumbers = []; // [2,4,10,20] // filter from above numbers varaiable
/* 
    loop for original numbers variable
    and in each loop check if the number is even, 
        if even, push in array evenNumbers  // to find even odd use <number> % 2
*/

// STEP1

// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i] %2 == 0){
//         evenNumbers.push(numbers[i])
//     }
// }

// STEP2
// numbers.forEach((number) => {
//     if (number % 2 == 0) {
//         evenNumbers.push(number)
//     }
// })

/* falsy values : null undefined 0 NaN "" false */
// STEP3
numbers = [2, 3, 4, 5, 10, 20];
evenNumbers = numbers.filter((number) => {
  if (number % 2 == 0) {
    return true;
  }
});
// STEP4

evenNumbers = numbers.filter((number) => number % 2 == 0);
// edi hamle browser ko console ma gayera (number % 2 == 0) yo value rakhyo vane ra number ko thau ma 4 rakhda true nai huncha so esari garda ni huncha tesle true value chai return garcha ra  false return gardaina..

console.log(evenNumbers);

let ages = [10, 20, 30, 40, 40, 23];
// let agesStr = ["Age is 10", "age is 20",...]

agesStr = ages.map((age) => {
  return "age is" + age;
});
// agesStr = ages.map((age) => "age is" + age)
// console.log(agesStr)

// so basically filter le chai naya arry vanaidincha tara find le chai match vako value return garcha
// also The find method is useful when you need to locate the first element in an array that meets a specific criterion  and you don't need to search through the entire array.

// first kura matra match vaye  thick cha  find ma ...

// find Method:
// Purpose: The find method is used to find the first element in an array that satisfies a specified condition and return that element. It stops as soon as it finds a matching element and does not continue to iterate through the entire array.
// Return Value: It returns the first matching element or undefined if no matching element is found.
const numberss = [1, 2, 3, 4, 5];
const firstEven = numberss.find((element) => element % 2 === 0);
// Returns the first even number: 2
const numbersss = [1, 2, 3, 4, 5];
const evenNumberss = numbersss.filter((element) => element % 2 === 0);
// Returns an array of even numbers: [2, 4]
