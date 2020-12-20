let fs = require("fs");

let data = fs.readFileSync('input.txt', 'utf-8').split('\n');

const validationCounterV1 = (passwordChecker) => {
    let validCounter = 0;
    passwordChecker.forEach(tokenizingPassword=>{
        let repeat = 0;
        const tokens = tokenizingPassword.split(' ');
        const min = tokens[0].split('-')[0];
        const max = tokens[0].split('-')[1];
        const toCheckCharacter = tokens[1][0];
        const password = tokens[2];

        for(let i = 0; i<password.length; i++){
            if (password[i] === toCheckCharacter){
                repeat++;
            }
        }

        if(repeat>= min && repeat <=max){
            validCounter++;
        }
    })

    console.log(validCounter);
}

const validationCounterV2 = (passwordChecker) => {
    let validCounter = 0;
    passwordChecker.forEach(tokenizingPassword=>{
        const tokens = tokenizingPassword.split(' ');
        const positionOne = tokens[0].split('-')[0];
        const positionTwo = tokens[0].split('-')[1];
        const toCheckCharacter = tokens[1][0];
        const password = tokens[2];

        if(password[positionOne-1] === toCheckCharacter || password[positionTwo-1] === toCheckCharacter){
            if(password[positionOne-1] !== password[positionTwo-1]){
                validCounter++;
            }
        }
    })

    console.log(validCounter);
}

validationCounterV1(data);
validationCounterV2(data);