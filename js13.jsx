// In JavaScript, localStorage is a web storage feature that allows you to store key-value pairs in a web browser with no expiration time. It provides a simple way to store data locally in the user's browser, making it accessible across sessions and page reloads.

// Here's how you can use localStorage:

// 1: Setting a value in localStorage:

// You can set a key-value pair in localStorage using the setItem method. For example:

// localStorage.setItem('username', 'john_doe');
// localStorage.setItem('email', 'john@example.com');

// Retrieving a value from localStorage:

// You can retrieve a value from localStorage using the getItem method:

// const username = localStorage.getItem('username');
// console.log(username); // Output: 'john_doe'

// esari store garne bela localStorage le string ko form ma  value haru store garcha so eslai strigngify gareko ho

[1, 2, 3].includes(2);
// esko op true aaucha cause aary ma 2 cha vanna khojeko
//  euta array ma certain element cha ki nai vanera check garne lai matra ho

function calculateSum(num1, num2, num3, num4, ...rest) {
  let sum = num1 + num2 + num3 + num4;
  rest.forEach((numbers) => {
    sum += numbers;
  });
  console.log(sum);
}
// rest = [2, 32, 32, 21];

calculateSum(1, 2, 3, 4, 2, 32, 32, 21);

function double(num) {
  // let num=3 block scope variable
  console.log(num * 2);
}
double(3);

function triple(num) {
  //esma pani let num =10 nai cha cause let vanne scope varaible ho euta kunai pan euta scope ma use garna milcha
  console.log(num * 3);
}
triple(10);
