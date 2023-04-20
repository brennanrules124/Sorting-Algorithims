let unsortedArr = [];
let sortedArr = [];

DefineArray(100);

//Setup
function DefineArray(length){
    let usedNumbers = [];
    for(let i = 0; i < length; i++){
        rand = RandomVal(0, length);

        while(usedNumbers.includes(rand)){
            rand = RandomVal(0, length);
        }

        unsortedArr[i] = rand;
        usedNumbers.push(rand);
    }

    console.log(unsortedArr);
}

function RandomVal(min, max){ //inclusive, exclusive
    return Math.floor((Math.random() * (max + min)) - min);
}

//Sort
let indexVal = 0;
let usedIndexes = [];

while(sortedArr.length < unsortedArr.length){
    sortedArr.push(unsortedArr[indexVal]);

    while(indexVal < unsortedArr.length){
        if(unsortedArr[indexVal] < sortedArr[sortedArr.length - 1] && !usedIndexes.includes(indexVal)){
            sortedArr[sortedArr.length - 1] = unsortedArr[indexVal];

            usedIndexes += indexVal;
        }

        indexVal++;
    }

    indexVal = 0;
}

ReturnValues();

function ReturnValues(){
    return sortedArr;
}
