const form = document.querySelector("form");
const bill = document.getElementById("bill");
const percent = document.querySelectorAll(".btn");
const custom = document.querySelector("#custom");
const nop = document.getElementById("nop");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("keyup", () => {
  billInput = Number(bill.value);
  customInput = Number(custom.value);
  nopInput = Number(nop.value);

});

function output() {
  console.log(this.value);
}

percent.forEach((p) => {
  p.addEventListener("click", output, true);
});




