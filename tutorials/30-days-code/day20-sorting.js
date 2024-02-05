'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function bubbleSort(len, arr) {
  let count = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        count++
      }
    }
  }
  return count
}

function main() {
  // const n = parseInt(readLine().trim(), 10);
  // const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
  const n = 7;
  const a = [3, 2, 1, 4, 5, 6, 7];

  // Write your code here
  let swaps = bubbleSort(n, a)
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[n - 1]}`)
}
