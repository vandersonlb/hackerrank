function processData(input) {
  //Enter your code here
  // input = input.split("\n").map(n => Number(n))
  var T = input[0]
  for (i = 1; i <= T; i++) {
    isPrime(input[i])
  }
}

function isPrime(n) {
  var msg = n == 1 ? "Not prime" : "Prime";
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      msg = "Not prime";
      break;
    }
  }
  console.log(msg)
}

/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
*/

// var _input = [3, 12, 5, 7]
var _input = [10, 4, 9, 25, 49, 121, 169, 289, 361, 529, 841]
processData(_input);



