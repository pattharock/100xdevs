let userList = [
  {
    firstName: "NameOne",
    gender: "M",
    age: 21
  },
  {
    firstName: "NameTwo",
    gender: "M",
    age: 17
  },
  {
    firstName: "NameThree",
    gender: "F",
    age: 50
  }
]


function maleUsersWhoCanVote(users) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.gender === "M" && user.age >= 18) {
      result.push(user)
    }
  }

  return result;
}

function betterMaleUsersWhoCanVote(users) {
  return users.filter( user => user.gender == "M" && user.age >= 18);
}


console.log(maleUsersWhoCanVote(userList));
console.log(betterMaleUsersWhoCanVote(userList));
