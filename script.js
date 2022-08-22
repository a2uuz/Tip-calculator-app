const form = document.querySelector("form");
const bill = document.getElementById("bill");
const percent = document.querySelector(".btn");
const custom = document.querySelector("#custom");
const nop = document.getElementById("nop");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");
const error = document.querySelector(".error");

wrapper.addEventListener("keyup", () => {
  billInput = parseFloat(bill.value);
  customInput = parseFloat(custom.value);
  nopInput = parseFloat(nop.value);
  ACTION();
});

function ACTION() {
  if (nopInput >= 1) {
    let tipCalc = (billInput * customInput) / nopInput;
    let totalCalc = (billInput + tipCalc) / nopInput;
    tipAmount.innerHTML = `$${tipCalc.toFixed(2)}`;
    total.innerHTML = `$${totalCalc.toFixed(2)}`;
  } else {
    
  }
}


reset.addEventListener("click", () => {
  bill.value = "";
  custom.value = "";
  nop.value = "";
});

