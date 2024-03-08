'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

let modifyArray = a => a.map(el => el % 2 ? el * 3 : el * 2);

function main() {
    const n = +(readLine());
    // const a = readLine().split(' ').map(Number);
    const a = [1, 2, 3, 4, 5];

    console.log(modifyArray(a).toString().split(',').join(' '));
}