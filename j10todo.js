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

console.log(alreadybanayekoarray);
