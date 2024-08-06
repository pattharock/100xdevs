function canVote(age) {
  return (age >= 18);
}

console.log(canVote(16)); // false
console.log(canVote(17)); // false 
console.log(canVote(18)); // true
