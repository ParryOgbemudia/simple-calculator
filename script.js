const display = document.querySelector("#display");

const appendToDisplay = function (input) {
  display.value += input;
  console.log(display.value);
};

const clearDisplay = function () {
  display.value = "";
};

const calculate = function () {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
};
