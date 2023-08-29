function findMultiplication(number, startFrom, endAt) {
  for (let index = startFrom; index <= endAt; index++) {
    console.log(`${number}*${index}=${number * index}`);
  }
}

findMultiplication(10, 1, 10);
console.log("----------------");

findMultiplication(5, 4, 7);


function identifyEvenNumber(num){
if(num%2==0){
    console.log("yes this is even")
}else{
    console.log("Sorry this is not even number")
}
}
identifyEvenNumber(11)
//   temppelate literals functions and loop


function even(num){
    for(let index=0;index<=num;index++){
        if(index%2==0){
            console.log(index)
        }
    }
}
even(10)
even(5)