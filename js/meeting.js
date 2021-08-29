// callback function

function showMessage(text, name) {
  console.log(`${text}, ${name}`);
}

//setTimeout(showMessage, 3000, "hello", "Yura");

//setInterval(showMessage, 500, "hello", "Yura");

function showName() {
  console.log("Vasya");
}
setTimeout(showName, 0);
console.log("kolya");
