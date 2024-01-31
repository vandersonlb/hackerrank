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

function isWeird(num) {
  if (num % 2 == 1 || (num >= 6 && num <= 20)) return "Weird"
  if (num > 20 || (num >= 2 && num <= 5)) return "Not Weird"
}

function main() {
  const N = parseInt(readLine().trim(), 10);
  console.log(isWeird(N))
}

/*
If n is odd, print Weird
If n is even and in the inclusive range 2 of 5 to , print Not Weird
If n is even and in the inclusive range 6 of 20 to , print Weird
If n is even and greater than 20, print Not Weird
*/