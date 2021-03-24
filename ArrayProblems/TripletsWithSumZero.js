let numbers = new Array;
numbers.push(-1,2,-3,1,0);
for(let i = 0; i < numbers.length; i++){
    let firstNumber = numbers[i];
    for(let j = i + 1; j < numbers.length; j++){
        let secondNumber = numbers[j];
        for(let k = j + 1; k < numbers.length; k++){
            let thirdNumber = numbers[k];

            let sum = firstNumber + secondNumber + thirdNumber;

            if(sum == 0){
                console.log(sum);
            } else {
                console.log("Not Exist");
            }
        }
    }
}
