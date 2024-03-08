/*
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
*/


function main() {
  // const N = parseInt(readLine().trim(), 10);
  const N = 6;
  const list = ["riya riya@gmail.com", "julia julia@julia.me", "julia sjulia@gmail.com", "julia julia@gmail.com", "samantha samantha@gmail.com", "tanya tanya@gmail.com"]

  var filterList = []
  for (let NItr = 0; NItr < N; NItr++) {
    // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const firstMultipleInput = list[NItr].split(' ');
    const firstName = firstMultipleInput[0];
    const emailID = firstMultipleInput[1];

    if(/@gmail\.com/.test(emailID))
      filterList.push(firstName)
  }
  filterList.sort().forEach(name => console.log(name));
}

main()