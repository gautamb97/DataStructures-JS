//Generate 10 Random 3 digit number and stored into an array
let random = new Array;
for(let dieRoll = 0; dieRoll < 10; dieRoll++){
    let randomValue = Math.floor(Math.random() * 999 + 10);
    random.push(randomValue);
}
console.log("The ten random values are : "+random);