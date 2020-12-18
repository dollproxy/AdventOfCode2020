let fs = require("fs");

let data = fs.readFileSync("input.txt", "utf-8").split('\n');

for(let i=0; i<data.length;i++) data[i] = parseInt(data[i], 10);

const sumOfTwo = (input, targetValue) => {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === targetValue) {
                console.log(input[i]*input[j]);
            }
        }
    }
}

const sumOfThree = (input, targetValue) => {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            for(let k = j + 1; k < input.length; k++){
                if(input[i]+input[j]+input[k] === targetValue){
                    console.log(input[i]*input[j]*input[k])
                }
            }
        }
    }
}

sumOfTwo(data, 2020);
sumOfThree(data, 2020);