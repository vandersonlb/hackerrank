const btn = document.querySelector("#btn");
btn.addEventListener("click", evt => {
  let num = Number(btn.innerHTML);
  btn.innerHTML = ++num;
})