function calcTipAmount(billValue, tipValue) {
  const displayTipAmount = document.querySelector('#numTipAmount');
  if (billValue && tipValue) {
    console.log(`Bill Value: ${billValue}`);
    console.log(`Tip Value: ${tipValue}`);
    const tipAmountValue = (Number(billValue) * Number(tipValue)) / 100;
    displayTipAmount.textContent = tipAmountValue;
    console.log(`Tip Amount: ${tipAmountValue}`);

    return tipAmountValue;
  }
  return 0;
}

// Global variables
let billValue;
let tipPercentValue;
let numOfPeopleValue;

function calcTotal(tipAmountValue = 0) {
  console.log(`Bill Value: ${billValue}`);
  console.log(`Tip Amount: ${tipAmountValue}`);
  console.log(`Num of People: ${numOfPeopleValue}`);
  // Will only run if all values are not empty
  if (billValue && tipAmountValue && numOfPeopleValue) {
    const displayTotal = document.querySelector('#numTotal');
    const total = (Number(billValue) + Number(tipAmountValue)) / Number(numOfPeopleValue);
    displayTotal.textContent = total;
    console.log(`Total: ${total}`);
  }
}

const inputBill = document.querySelector('#bill');
inputBill.addEventListener('input', (e) => {
  billValue = e.target.value; // Sets global variable to the inputted value
  calcTotal(calcTipAmount(billValue, tipPercentValue));
});

// Bubbling concept
// Fires event listener to all the buttons inside the wrapper class and stores their value
const wrapperTips = document.querySelector('.wrapper');
wrapperTips.addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  tipPercentValue = e.target.value;
  calcTotal(calcTipAmount(billValue, tipPercentValue));
});

// Store entered tip value to variable when input event is fired
const inputTipCustom = wrapperTips.querySelector('#input-tip');
inputTipCustom.addEventListener('input', (e) => {
  tipPercentValue = e.target.value;
  calcTotal(calcTipAmount(billValue, tipPercentValue));
});

// Store entered number of people value to variable when input event is fired
const inputNumOfPeople = document.querySelector('#numOfPeople');
inputNumOfPeople.addEventListener('input', (e) => {
  numOfPeopleValue = e.target.value;
  calcTotal(calcTipAmount(billValue, tipPercentValue));
});
