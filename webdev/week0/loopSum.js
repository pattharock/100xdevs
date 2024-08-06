function loopSum(num) {
  if (num < 1) {
    return -1;
  }
  let localSum = 0;
  for (let i = 1; i <= num; i++) {
    localSum += i;
  }
  return localSum;
}


console.log(loopSum(10)); // 55
console.log(loopSum(1)); // 1
console.log(loopSum(6)); // 21
console.log(loopSum(0)); // -1
