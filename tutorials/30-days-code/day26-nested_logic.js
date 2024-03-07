/*
function processData(input) {
  //Enter your code here
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
*/


// var returned = [9, 6, 2015];
// var duedate = [6, 6, 2015];
var returned = [23, 12, 1234];
var duedate = [19, 9, 2468];
// var returned = [19, 6, 1984];
// var duedate = [16, 6, 1985];
// var returned = [8, 4, 12];
// var duedate = [1, 1, 1];

returned = new Date(returned[2], returned[1] - 1, returned[0]);
duedate = new Date(duedate[2], duedate[1] - 1, duedate[0]);

function calculateFine(returned, duedate) {
  var diffYear = returned.getFullYear() - duedate.getFullYear();
  var diffMonth = returned.getMonth() - duedate.getMonth();
  var diffDay = returned.getDate() - duedate.getDate();

  if (diffYear > 0)
    return 10000;

  if (diffYear == 0 && diffMonth > 0)
    return (returned.getMonth() - duedate.getMonth()) * 500;

  if (diffYear == 0 && diffMonth == 0 && diffDay > 0)
    return (returned.getDate() - duedate.getDate()) * 15;

  return 0;
}

console.log(calculateFine(returned, duedate));
