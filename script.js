const add = (a, b) => {
  return parseFloat(a + b);
};
const substract = (a, b) => {
  return parseFloat(a - b);
};
const multiply = (a, b) => {
  return parseFloat(a * b);
};
const divide = (a, b) => {
  return parseFloat(a / b);
};
const operate = (a, b, oper) => {
  switch (oper) {
    case "+":
      return add(a, b);

    case "-":
      return substract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    default:
      console.log("ERRER");
      break;
  }
};
const initialValue = 0;
const display = document.querySelector(".display");
display.textContent = initialValue;

let value1 = "";
let operator = "";
let value2 = "";
let result = 0;

const numbers = document.querySelectorAll(".nb");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (operator == "") {
      if (value1 == result.toString()) value1 = "";
      value1 += e.target.textContent;
      display.textContent = value1;
    }
    if (operator != "") {
      value2 += e.target.textContent;
      display.textContent = value2;
    }
  });
}

const opes = document.querySelectorAll(".ope");
for (let i = 0; i < opes.length; i++) {
  opes[i].addEventListener("click", (e) => {
    operator = e.target.textContent;
    display.textContent = operator;
    point.removeAttribute("disabled");
  });
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (value1 == "" || value2 == "" || operator == "") {
    display.textContent = "ERRER";
    value1 = "";
    value2 = "";
    operator = "";
    point.removeAttribute("disabled");
  } else {
    if (operator == "/" && value2 == "0") {
      display.textContent = "ERRER";
      value1 = "";
      value2 = "";
      operator = "";
      point.removeAttribute("disabled");
    } else {
      result = Number(
        operate(parseFloat(value1), parseFloat(value2), operator).toFixed(5)
      );
      display.textContent = result;
      value1 = result.toString();
      value2 = "";
      operator = "";
    }
  }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = initialValue;
  value1 = "";
  value2 = "";
  operator = "";
  result = 0;
  point.removeAttribute("disabled");
});

const point = document.querySelector(".point");
point.addEventListener("click", () => {
  if (value1 != "" && !value1.includes(".") && operator == "") {
    value1 += ".";
    point.setAttribute("disabled", "true");
    display.textContent = value1;
  }
  if (value2 != "" && !value2.includes(".") && operator != "") {
    value2 += ".";
    point.setAttribute("disabled", "true");
    display.textContent = value2;
  }
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  if (operator == "" && value1 != "") {
    value1 = value1.slice(0, -1);
    display.textContent = value1;
  }
  if (operator != "" && value2 != "") {
    value2 = value2.slice(0, -1);
    display.textContent = value2;
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key == "=") equal.click();
  if (e.key == "c") clear.click();
  if (e.key == ".") point.click();
  if (e.key == "b") backspace.click();
  for(let i =0;i<numbers.length;i++){
    if(numbers[i].textContent==e.key) numbers[i].click();
  }
  for(let i =0;i<opes.length;i++){
    if(opes[i].textContent==e.key) opes[i].click();
  }
});
