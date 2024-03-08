const btns = document.querySelectorAll("button")
const numOrder = [1, 2, 3, 6, 9, 8, 7, 4];
const btnsOrder = numOrder.map(num => btns[num-1]);
let pointer = 0;
btns[4].addEventListener("click", () => {
  for (let i = 0; i < numOrder.length; i++, pointer--)
    btnsOrder[i].innerHTML = numOrder[Math.abs(pointer === numOrder.length ? numOrder.length : pointer % numOrder.length)];
  pointer++;
})
btns[4].click()