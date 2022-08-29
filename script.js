const bill = document.getElementById("bill");
const tipPercent = document.querySelectorAll(".btns .btn");
const customPercent = document.querySelector("#custom");
const nop = document.getElementById("nop");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");
const focus = document.querySelector(".focus");
const error = document.querySelector(".error");
let tipValue = 0.15;

wrapper.addEventListener("keyup", () => {
  billInput = parseFloat(bill.value);
  nopInput = parseFloat(nop.value);
  ACTION();
});

// CUSTOM INPUT FIELD FUNCTION
customPercent.addEventListener("input", CUSTOMINPUT);
function CUSTOMINPUT() {
  tipValue = parseFloat(customPercent.value / 100);
}

focus.classList.remove("focus");
error.classList.remove("focus");
error.classList.remove("error");

bill.addEventListener("input", () => {
  if (bill.value) {
    focus.classList.add("focus");
  } else {
    focus.classList.remove("focus");
  }
});

nop.addEventListener("input", () => {
  if (nop.value < 1) {
    error.classList.remove("focus");
    error.classList.add("error");
  } else {
    error.classList.add("focus");
    error.classList.remove("error");
  }
});

// TIP PERCENT BUTTONS FUNCTION
tipPercent.forEach((val) => {
  val.addEventListener("click", TIPBTN);
});
function TIPBTN(event) {
  tipPercent.forEach((val) => {
    if (event.target.innerHTML === val.innerHTML) {
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  ACTION();
}

// CALCULATE FUNCTION
function ACTION() {
  if (nopInput >= 1) {
    let tipCalc = (billInput * tipValue) / nopInput;
    let totalCalc = (billInput + billInput * tipValue) / nopInput;

    tipAmount.innerHTML = `$${tipCalc.toFixed(2)}`;
    total.innerHTML = `$${totalCalc.toFixed(2)}`;
  }
}

// RESET BUTTON
reset.addEventListener("click", () => {
  bill.value = "";
  customPercent.value = "";
  nop.value = "";
});
