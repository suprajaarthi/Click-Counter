var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};


var resetButton = document.getElementById("reset");

resetButton.onclick = function() {
  count=0;
  button.innerHTML = "Click me: " + "0";
};