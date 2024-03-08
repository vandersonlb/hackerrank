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

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  var tip = meal_cost / 100 * tip_percent;
  var tax = meal_cost / 100 * tax_percent;
  var total_cost = Math.round(meal_cost + tip + tax);

  console.log(total_cost);
}

function main() {
  // const meal_cost = parseFloat(readLine().trim());
  // const tip_percent = parseInt(readLine().trim(), 10);
  // const tax_percent = parseInt(readLine().trim(), 10);
  const meal_cost = 12.00;
  const tip_percent = 20;
  const tax_percent = 8;

  solve(meal_cost, tip_percent, tax_percent);
}
