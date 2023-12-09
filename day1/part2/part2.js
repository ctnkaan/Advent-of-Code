const fs = require('fs');
const readline = require('readline');
const fileStream = fs.createReadStream('../input.txt');

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

let answer = 0;

const digitsArr = [
    {name: 'one', value: '1'}, 
    {name: 'two', value: '2'}, 
    {name: 'three',  value:  '3'}, 
    {name: 'four', value:  '4'}, 
    {name: 'five', value:  '5'}, 
    {name: 'six',  value: '6'}, 
    {name: 'seven',  value: '7'}, 
    {name: 'eight',  value: '8'}, 
    {name: 'nine', value:  '9'},
]


rl.on('line', (line) => {
    console.log(`Line: ${line}`);

    const digits = new Map();    

    //numbers
    line.split("").forEach((e, i) => {
        if (e % e === 0) {
            digits.set(i, e)
        }
    })

    //strings
    digitsArr.forEach((digit, i) => {
        const regex = new RegExp(digit.name, 'gi');
        let match;
        while ((match = regex.exec(line)) !== null) {
            digits.set(match.index, digit.value);
        } 
    })


    console.log(digits);


    const first = digits.get(Math.min(...digits.keys()))
    const last = digits.get(Math.max(...digits.keys()))

    console.log(parseInt(first + last))

    answer += parseInt(first + last)
    console.log("---> ",answer)
});



rl.on('close', () => {
    console.log('Finished reading the file.');
});

