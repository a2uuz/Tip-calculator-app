const form = document.querySelector("form");
const bill = document.getElementById("bill");
const tipPercent = document.querySelector("#btns");
const customPercent = document.querySelector("#custom");
const nop = document.getElementById("nop");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");
const error = document.querySelector(".error");

wrapper.addEventListener("keyup", () => {
  billInput = parseFloat(bill.value);
  customInput = parseFloat(customPercent.value) / 100;
  nopInput = parseFloat(nop.value);
  ACTION();
});


function ACTION() {
  if (nopInput >= 1) {
    let tipCalc = (billInput * customInput) / nopInput;
    let totalCalc = (billInput + billInput * customInput) / nopInput;

    tipAmount.innerHTML = `$${tipCalc.toFixed(2)}`;
    total.innerHTML = `$${totalCalc.toFixed(2)}`;
  }
}

reset.addEventListener("click", () => {
  bill.value = "";
  customPercent.value = "";
  nop.value = "";
});
