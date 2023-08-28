let persons = [
    {
        first_name: "john",
        last_name: "Doe",
        age: 10
    },
    {
        first_name: "Rajesh",
        last_name: "Hamal",
        age: 20
    },
    {
        first_name: "John",
        last_name: "Wick",
        age: 30
    },
]

// console.log(`name is  ${persons[0].first_name} ${persons[0].last_name} and age is ${persons[0].age} `)
// console.log(`name is  ${persons[1].first_name} ${persons[1].last_name} and age is ${persons[1].age} `)



function printPersonInfo(index){
    console.log(`name is ${persons[index].first_name} ${persons[index].last_name} and age is ${persons[index].age} `)
}

printPersonInfo(0)
printPersonInfo(1)
printPersonInfo(2)



/* 
    loop
     - doing same task  again and again for certain number of times 

        - for loop
             - when we know exect number of iteration
        - while loop
            - when we donot know exact number of iterations/ cycle  BUT we know the condition
        - do while loop
*/


// console.log(0)
// console.log(1)
// console.log(2)



/*  
Operator
    Assignment Operator
     = 
     
     Increment Opertor
        -  Post increment   <varaible>++
        - Pre INcrement ++<variable>

    Arthematic Operator  + - * / % 
       % -> modulous // returns remainder 


            10 /3   // 3.3333
            10 % 3   // 1   -> 1 is remainder

     Comparisoin Opertor
      < 
      > 
      <=
      >=
      
      equality opertor
      ==
      ===  // strict equality // checks the data-types too
            eg "1" == 1  // true
            eg "1" === 1  
            === are like strict equality operator
            // false
      
*/

// console.log(10 / 3 )
// console.log(9 % 3 )


let number = 1
number = 2
number =  number  + 1  // now number = 3

number += 1  // same as above  // 4

number++   // 5
// ++number   // 6

console.log({number})


let age = 20
// console.log("Age", age++)
// console.log("age",age)
console.log("Age", ++age) 
// preincrement ra post ma k pharak vanda both increamnt nai garne ho tara pre ma agadi nai increase gaera rakhcha whereas post ma pachi rakhcah change vaye pani  teti bela nai dekahaudaina arko choti call garne bela matra dekhauca

console.log("age",age)

"1"==1 
// gives true
// double equals le 1 vane left side ko string ma vaye pani true return garcha 
// how vanda there is specail function called as parseInt which will convert it 


// CONDITION

let willRain =true;
let proablity=false;
if (willRain){
    console.log("take umbrella")
}else{
    if(proablity){
        console.log("you may take it")
    }else{
        console.log("dont take umbrella")

    }
}
if(willRain){
    console.log("take umbrella")
}else if(proablity){
    console.log("you make take it")
}else{
    console.log("dont take")
}

minAge=18;
herAge=17;
hasConsent=true

if(herAge>=minAge){
    if(hasConsent){
        console.log("she can marry")

    }
}else{
    console.log("She cant")
}

// actual ma chai javascript ma gayera if(herAge>=minAge){ eti lai false dekaucha


// logical operator//
// AND OR NOT 


// lets go into AND in AND if the left hand side and right hand side value is true then it will give you true 

// now with the help of logical operator

if ((herAge>=minAge) && hasConsent){ 
    // above line ma (herAge>=minAge) le false return gaarcha tara right side ko true cha ani logical operator chai && cha so overall ((herAge>=minAge) && hasConsent))=> (false)&& true=== false nai huncah so it will go to false part
     
    console.log("she can marry")
}else{
    console.log("she cant marry.")
}


/* condition

    SYNTAX 

    if( <condition>  ){
        do true case task
    }else{
        do something else
    }



*/


let willlRain = true;
let hasProbability = true;

if (willRain) {
    console.log("take umbrella");
} else {

    if (hasProbability) {
        console.log("You may take it. ")
    } else {
        console.log("No need.");
    }
}

console.log("_________________");

if (willRain) {
    console.log("take umbrella");
} else if (hasProbability) {
    console.log("You may take it. ")
} else {
    console.log("no need");
}

/* Ternary operator ? */
/* Falsy values */




// if (false) {
//     console.log("true case ");
// } else {
//     console.log("false case");
// }


minAge = 18
herAge = 19
hasConsent = false

if (herAge >= minAge) {

    if (hasConsent) {
        console.log("she can .. ");
    } else {
        console.log("she cant");
    }

} else {
    console.log("she cant'");
}


if ((herAge >= minAge) && hasConsent) {
    console.log("she can marry");
} else {
    console.log("she cant");
}



/* Logical Operator

    AND   &&
        when both the right handl side value and left hand side value is true, it will give true

    OR  ||
        returns true, if any one of the value is true
    NOT  !
        make our value opposition

*/





let todo1 = {
    "id": 1,
    "todo": "html",
    "completed": true,
}

let todo2 = {
    "id": 1,
    "todo": "css",
    "completed": true,
}

let todo3  ={
    "id": 3,
    "todo": "js",
    "completed": false,
}


/* 
    html is complte
    css is complte
    js is pending

*/


if(todo1.completed){
    console.log(`${todo1.todo} is completed`)
}else{
    console.log(`${todo1.todo} is pending`)
}
if(todo2.completed){
    console.log(`${todo2.todo} is completed`)
}else{
    console.log(`${todo2.todo} is pending`)
}
if(todo3.completed){
    console.log(`${todo3.todo} is completed`)
}else{
    console.log(`${todo3.todo} is pending`)
}

// hera ta aba yeha pani code haru repeat vako cha jun chai bad way of programming ho so do it with function

console.log("-------------------------- ")
function printStatus(a,b){
    if(a){
        console.log(`${b} is completed`)
    }else{
        console.log(`${b} is pending`)
    }
    
}

printStatus(todo1.completed,todo1.todo)
printStatus(todo2.completed,todo2.todo)
printStatus(todo3.completed,todo3.todo)


function add(a,b){
    console.log(a+b);
}

add(1,2)
console.log("nextway array ko part wala--------------")

let todos = [
    {
        "id": 1,
        "todo": "html",
        "completed": false,
    },
    {
        "id": 2,
        "todo": "css",
        "completed": true,
    },
    {
        "id": 3,
        "todo": "js",
        "completed": false,
    },
]



todoo3=todos[2]

function printdetailsharu(todo_obj){
    if(todo_obj.completed){
        console.log(`${todo_obj.todo} is completed`)
    }else{
        console.log(`${todo_obj.todo} is pending`)
    }
    
}
printdetailsharu(todos[0])
printdetailsharu(todos[1])
printdetailsharu(todoo3)
 
// esma aba hera ta function pani aairakkhyo nita lets say hami sanga 200 choti esi function call garnu paryo vane it will be time consuming so loop garnu beeter ho 

//  LOOP (loop.js)
// let go for FOR loop suppose euatai kam kati choti garne vanera hamlai thacha vane loop lako ramro 

// let say wap to print number from 0 to 10 here we know upto where we have to print so 

for (let count=0; count<10;count++){
    console.log(count)
}

// syntax 

 // for (inital vallye; <condition>; modifier){
     //do some tasks
 // }




