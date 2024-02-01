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
  const n = parseInt(readLine().trim(), 10);
  var bin = convertToBinRecursive(n);
  console.log(countConsecutives(bin));
}

/** MY FUNCTIONS **/
function convertToBin(num) {
  return (num >>> 0).toString(2);
}

function convertToBinRoot(num) {
  var arr = []
  while (num > 0) {
    arr.unshift(num % 2)
    num = parseInt(num / 2)
  }
  return arr.join("")
}

function convertToBinRecursive(num) {
  let bin = (parseInt(num % 2)).toString()
  if (num <= 1) return bin
  num = parseInt(num / 2)
  return convertToBinRecursive(num) + bin
}

function countConsecutives(binaryString) {
  let [temp, consecutive, pointer] = [0, 0, 0];

  while (pointer < binaryString.length) {
    let actual = binaryString[pointer];
    if (actual == 1)
      temp++, pointer++;

    if (actual == 0 || pointer == binaryString.length) {
      consecutive = temp > consecutive ? temp : consecutive;
      temp = 0, pointer++;
    }
  }
  return consecutive
}
