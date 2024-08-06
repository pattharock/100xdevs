let args = process.argv.slice(2);

if (args.length == 0) {
  console.log("Please input a number. \n");
} else {
  let number = Number(args[0]);
  let message = "The number is ";
  if (number % 2 == 0) {
    message += "Even."
  } else {
    message += "Odd."
  }
  message += "\n"
  console.log(message);
}
