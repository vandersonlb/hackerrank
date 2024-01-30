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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
	// Complete the function
	let bigger = Math.max(...nums);
	while(nums.includes(bigger)) {
		let biggerIdx = nums.indexOf(bigger);
		nums.splice(biggerIdx, 1);
	}
	return Math.max(...nums);
}


function main() {
	// const n = +(readLine());
	// const nums = readLine().split(' ').map(Number);
	const n = 5;
	const nums = [2, 3, 6, 6, 5];


	console.log(getSecondLargest(nums));
}