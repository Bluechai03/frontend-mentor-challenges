function calcTipAmount(bill, tipPercent) {
  console.log(bill, tipPercent);
  console.log(`Tip amount: ${(tipPercent / bill) * 100}`);
}

function getTipAmount() {
  const inputBill = document.querySelector('#bill');

  let bill;
  inputBill.addEventListener('input', () => { bill = inputBill.value; });
  console.log(`bill: ${bill}`);

  const inputTips = document.querySelectorAll('.btn--tip');
  let tipAmount;
  inputTips.forEach((inputTip) => inputTip.addEventListener('click', () => {
    const tip = (inputTip.value.match(/\d+/)[0]);
    tipAmount = tip;
    calcTipAmount(bill, tipAmount);
  }));
}

getTipAmount();
calcTipAmount();
