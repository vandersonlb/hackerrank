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
/*
 * Create the function factorial here
 */
function factorial(n) {
    if(n == 1)
        return 1;

    return n * factorial(n - 1);
}

// const factorial = n => n == 1 ? 1 : n * factorial(--n);

function main() {
    // const n = +(readLine());
    const n = 6;
    
    console.log(factorial(n));
}
