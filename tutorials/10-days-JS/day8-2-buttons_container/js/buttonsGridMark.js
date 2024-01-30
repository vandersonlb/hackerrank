let nums = [1, 2, 3, 6, 9, 8, 7, 4];
const btnsOrder = nums.map(num => document.querySelectorAll("button")[num-1]);

document.getElementById("btn5").onclick = () => {
  nums.unshift(nums.pop());
  for (i = 0; i < nums.length; i++)
    btnsOrder[i].innerHTML = nums[i]
};
