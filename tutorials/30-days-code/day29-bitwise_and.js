/*
'use strict';

const fs = require('fs');

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
*/

/*
 * Complete the 'bitwiseAnd' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER K
 */

function bitwiseAnd(N, K) {
  // Write your code here
  var max = 0
  for (let a = 1; a <= N; a++) {
    for (let b = a + 1; b <= N; b++) {
      var bitResult = a & b;
      if (bitResult > max && bitResult < K)
        max = bitResult
    }
  }
  return max
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // const t = parseInt(readLine().trim(), 10);
  const input = ["5 2", "8 5", "2 2"]

  for (let tItr = 0; tItr < input.length; tItr++) {
    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const firstMultipleInput = input[tItr].replace(/\s+$/g, '').split(' ');

    const count = parseInt(firstMultipleInput[0], 10);
    const lim = parseInt(firstMultipleInput[1], 10);
    const res = bitwiseAnd(count, lim);
    console.log(res);

    // ws.write(res + '\n');
  }

  // ws.end();
}

main()