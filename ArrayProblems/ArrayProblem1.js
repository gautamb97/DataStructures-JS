//Generate 10 Random 3 digit number and stored into an array
let random = new Array;
for(let dieRoll = 0; dieRoll < 10; dieRoll++){
    let randomValue = Math.floor(Math.random() *(999-100+1)+100);
    random.push(randomValue);
}
console.log("The ten random values are : "+random);

//finding second largest number from the array without sorting
let largestNumber = random[0];
let secondLargestNumber = random[0];

for (let i = 0; i < random.length; i++){
    if (random[i] > largestNumber){
        secondLargestNumber = largestNumber;
        largestNumber = random[i];
    } else if (random[i] > secondLargestNumber){
        secondLargestNumber = random[i];
    }
}

console.log("The second largest number is : "+secondLargestNumber);

//finding second smallest number from the array without sorting
let smallestNumber = random[0];
let secondSmallestNumber = random[0];

for (let i = 0; i < random.length; i++){
    if (random[i] < smallestNumber){
        secondSmallestNumber = smallestNumber;
        smallestNumber = random[i];
    } else if (random[i] > smallestNumber && random[i] < secondSmallestNumber){
        secondSmallestNumber = random[i];
    }
}

console.log("The second smallest number is : "+secondSmallestNumber);