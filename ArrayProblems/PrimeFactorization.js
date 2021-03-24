let number = 36;
let listOfFactors = new Array;
for(let i = 2; i <= number/i; i++){
    while(number % i == 0 ){
        number = number / i;
        listOfFactors.push(i);
    }
}
console.log("The factors of 36 is : "+listOfFactors);
