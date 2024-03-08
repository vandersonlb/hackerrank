'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function reverse(arr) {
  console.log(arr.reverse().join(" "));
}

function reverseNoob(n, arr) {
  let reversed = ""
  for (let i = n - 1; i >= 0; i--)
    reversed += arr[i] + " "
  console.log(reversed);
}

function reverseNoob2(n, arr) {
  let reversed = []
  for (let i = 0; i < n; i++)
    reversed.push(arr.pop())
  console.log(reversed.join(" "));
}


function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  // reverse(arr);
  // reverseNoob(n, arr);
  reverseNoob2(n, arr);
}
