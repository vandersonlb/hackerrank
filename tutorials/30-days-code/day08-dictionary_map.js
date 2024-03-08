function processData(input) {
  //Enter your code here
  data_split = input.trim().split("\n")
  const n = data_split.shift()
  const toAdd = data_split.splice(0, n)
  const queries = data_split
  let schedule = new Map();

  toAdd.forEach(contact => addToSchedule(schedule, contact));
  queries.forEach(query => consultSchedule(schedule, query));
}

function addToSchedule(map, contact) {
  contact = contact.split(" ");
  map.set(contact[0], contact[1])
}

function consultSchedule(map, query) {
  if (map.has(query.trim())) {
    console.log(`${query.trim()}=${map.get(query.trim())}`);
  } else {
    console.log("Not found");
  }
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

const fs = require("node:fs");
fs.readFile("./day8-test.txt", "utf8", (err, data) => {
  if (err) return;
  processData(data)
});
