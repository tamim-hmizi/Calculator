const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
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

const nubmers = document.querySelectorAll(".nb");
for (let i = 0; i < nubmers.length; i++) {
  nubmers[i].addEventListener("click", (e) => {
    if (operator == "") {
      if (value1 == result.toString()) value1 = "";
      value1 += e.target.textContent;
      display.textContent = value1;
      console.log("value 1 : " + value1);
    }
    if (operator != "") {
      value2 += e.target.textContent;
      display.textContent = value2;
      console.log("value 2 : " + value2);
    }
  });
}

const opes = document.querySelectorAll(".ope");
for (let i = 0; i < opes.length; i++) {
  opes[i].addEventListener("click", (e) => {
    operator = e.target.textContent;
    display.textContent = operator;
    console.log("operator : " + operator);
  });
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (value1 == "" || value2 == "" || operator == "") {
    display.textContent = "ERRER";
    value1 = "";
    value2 = "";
    operator = "";
  } else {
    if(operator=="/"&&value2=="0"){
      display.textContent = "ERRER";
      value1 = "";
      value2 = "";
      operator = "";
    }else{
    result = Number(
      operate(parseInt(value1), parseInt(value2), operator).toFixed(5)
    );
    display.textContent = result;
    value1 = result.toString();
    value2 = "";
    operator = "";
    console.log("resultat : " + result);
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
});
