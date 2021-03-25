let resultOfDieRolls = new Map;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

while( count1 <= 10 && count2 <= 10 && count3 <= 10 &&
    count4 <= 10 && count5 <= 10 && count6 <= 10){

    let dieRoll = 1 + (Math.floor(Math.random() * 10) % 6);
    //console.log(dieRoll);

    if(dieRoll == 1){
        resultOfDieRolls.set("count1",count1);
        count1++;
    }else if (dieRoll == 2){
        resultOfDieRolls.set("count2",count2);
        count2++;
    }else if (dieRoll == 3){
        resultOfDieRolls.set("count3",count3);
        count3++;
    }else if (dieRoll == 4){
        resultOfDieRolls.set("count4",count4);
        count4++;
    }else if (dieRoll == 5){
        resultOfDieRolls.set("count5",count5);
        count5++;
    }else if (dieRoll == 6){
        resultOfDieRolls.set("count6",count6);
        count6++;
    }
}
console.log(resultOfDieRolls);
//console.log(count1+" "+count2+" "+count3+" "+count4+" "+count5+" "+count6);
resultOfDieRolls[Symbol.iterator] = function* () {
    yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
}

for (let [key, value] of resultOfDieRolls) {     // get data sorted
    console.log(key + ' ' + value);
}

console.log([...resultOfDieRolls]);              // sorted order
console.log([...resultOfDieRolls.entries()]);    // original insertation order
