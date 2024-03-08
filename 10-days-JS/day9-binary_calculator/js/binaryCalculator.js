const res = document.querySelector("#res")
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", evt => {
    if(evt.target["id"] !== "btnClr")
      res.innerHTML += evt.target.innerHTML

    if(evt.target["id"] === "btnClr")
      res.innerHTML = ""

    if(evt.target["id"] === "btnEql") {
      res.innerHTML = resolve(res.innerHTML)
    }

  })
})

function resolve(expression) {
  const regexp = /(\d+)(.)(\d+)/g;
  let execute = regexp.exec(expression);
  let operator = execute[2];
  let result = 0;

  switch (operator) {
    case "+":
      result = convertToDecimal(execute[1]) + convertToDecimal(execute[3])
      break;
  
    case "-":
      result = convertToDecimal(execute[1]) - convertToDecimal(execute[3])
      break;
  
    case "*":
      result = convertToDecimal(execute[1]) * convertToDecimal(execute[3])
      break;
  
    case "/":
      result = convertToDecimal(execute[1]) / convertToDecimal(execute[3])
      break;
  }

  return convertToBin(result)
}

function convertToBin(n) {
  return (n >>> 0).toString(2);
}

function convertToDecimal(n) {
 return parseInt(n, 2);
}
