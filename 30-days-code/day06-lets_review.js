function processData(input) {
  //Enter your code here
  input = input.trim().split("\n");
  var t = input[0];

  for (let i = 1; i <= t; i++)
    evenOddChar(input[i])

}

function evenOddChar(s) {
  let [s1, s2] = ["", ""];

  for (let i = 0; i < s.length; i++)
    i % 2 == 0 ? s1 += s[i] : s2 += s[i];

  console.log(`${s1} ${s2}`);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});
process.stdin.on("end", function () {
  processData(_input);
});
