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



function main() {

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  console.log(countMatrix(arr));
}

function countMatrix(array) {
  let max = -99;
  let pattern = [[0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2]];

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = 0; j < array.length - 2; j++) {
      let newArr = pattern.map(el => array[j + el[0]][i + el[1]])
      let sum = newArr.reduce((a, b) => a + b);
      max = sum > max ? sum : max;
    }
  }

  return max;
}

/*
var arrTest = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]
]
*/