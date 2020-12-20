let fs = require("fs");

let data = fs.readFileSync('input.txt', 'utf-8').split('\n');


const validMoves = [[1,1],[3,1],[5,1],[7,1],[1,2]]

const treeCounter = (right, down) => {
    let x = right;
    let y = down;
    let trees = 0;

    while(y < data.length){

        if(x > data[y].length-1){
            x = x % data[y].length;
        }
        if(data[y][x] === '#'){
            trees++;
        }

        x += right;
        y += down;
    }
    return trees;
}

const allTreesMultiplied = () => {
    let mulTrees = 1;

    for(let iterator in validMoves){
        mulTrees *= treeCounter(data, validMoves[iterator][0], validMoves[iterator][1]);
    }



    return mulTrees;
}

console.log(treeCounter(data, validMoves[0][0], validMoves[0][1]));
console.log(allTreesMultiplied());