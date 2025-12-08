'use strict';

const nums = []

for(let i = 0; i < 5; i++) {
  nums.push(+prompt("Anna numero: "))
}

for(let i = nums.length; i >= 0; i--) {
  console.log(nums[i])
}