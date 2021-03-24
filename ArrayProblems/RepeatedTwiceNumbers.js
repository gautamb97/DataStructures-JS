let repeatedNumbers = new Array;
let count = 0;
for(let i = 0; i < 100; i++){
    if(i%11 == 0){
        repeatedNumbers.push(i);
    }
}
console.log("The repeated twice numbers from 1-100 are : "+repeatedNumbers);