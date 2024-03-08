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

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    dayName = new Date(dateString).toLocaleDateString('en-US', {weekday: 'long'})
    return dayName;
}


function main() {
    // const d = +(readLine());
    const d = 2;
    const arr = ["10/11/2009", "11/10/2010"]

    for (let i = 0; i < d; i++) {
        // const date = readLine();
        const date = arr[i]

        console.log(getDayName(date));
    }
}