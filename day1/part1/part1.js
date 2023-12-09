const fs = require('fs');
const readline = require('readline');
const fileStream = fs.createReadStream('./input.txt');

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

let answer = 0;


rl.on('line', (line) => {
    console.log(`Line: ${line}`);

    let first = null, last = null

    line.split("").forEach((e, i) => {
        if (e % e === 0 && first === null) {
            first = e
        } else if (e % e === 0) {
            last = e
        }
    })

    if (last === null)
        last = first

    answer += parseInt(first + last)
    console.log(answer)
});



rl.on('close', () => {
    console.log('Finished reading the file.');
});

