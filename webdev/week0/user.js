let userOne = {
  "firstName": "Ritvik",
  "age": 23,
  "gender": "M"
}


function greetUser(user) {
  return "Hello " + user.firstName + ", you are " + user.age + " years old.\n";
}

function genderNeutralGreetUser(user) {
  let prefix = "";
  if (user.gender === "M") {
    prefix = "Mr."
  } else if (user.gender === "F") {
    prefix = "Mrs."
  } else {
    prefix = "Ms."
  }
  
  let votingMessage = "";
  if (user.age >= 18) {
    votingMessage = "Congrats! You can vote :) \n"
  } else {
    votingMessage = "Sorry! You can not vote :( \n"
  }
  return "Hello, " + prefix + " " + user.firstName + " your age is " + user.age + ".\n" + votingMessage;
}

console.log(greetUser(userOne));
console.log(genderNeutralGreetUser(userOne));
