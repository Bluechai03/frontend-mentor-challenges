const displayTipAmount = document.querySelector('#numTipAmount');

function calcTipAmount(billValue = 0, tipValue = 0, numOfPeopleValue = 0) {
  if (billValue && tipValue && numOfPeopleValue) {
    console.log(`Bill Value: ${billValue}`);
    console.log(`Tip Value: ${tipValue}`);
    const totalTipAmountValue = (Number(billValue) * Number(tipValue)) / 100;
    const perTipAmountValue = totalTipAmountValue / numOfPeopleValue;
    displayTipAmount.textContent = perTipAmountValue;
    displayTipAmount.textContent = Math.floor((perTipAmountValue + Number.EPSILON) * 100) / 100;
    console.log(`Tip Amount: ${totalTipAmountValue}`);

    return totalTipAmountValue;
  }
  return 0;
}

// Global variables
let billValue;
let tipPercentValue;
let numOfPeopleValue;

const displayTotal = document.querySelector('#numTotal');

function calcTotal(tipAmountValue = 0) {
  console.log(`Bill Value: ${billValue}`);
  console.log(`Tip Amount: ${tipAmountValue}`);
  console.log(`Num of People: ${numOfPeopleValue}`);
  // Will only run if all values are not empty
  if (billValue && tipAmountValue && numOfPeopleValue) {
    const total = (Number(billValue) + Number(tipAmountValue)) / Number(numOfPeopleValue);
    displayTotal.textContent = Math.round(total * 100) / 100;
    console.log(`Total: ${total}`);
  }
}

function isValueZero() {
  const inputLabel = document.querySelector('.input-label');
  const numOfPeopleContainer = document.querySelector('#numOfPeopleContainer');
  if (Number(numOfPeopleValue) === 0) {
    numOfPeopleContainer.classList.add('input-field--error');
    console.log('Value is zero');
    inputLabel.setAttribute('data-after', "Can't be zero");
  } else {
    inputLabel.setAttribute('data-after', '');
    numOfPeopleContainer.classList.remove('input-field--error');
  }
}

const inputBill = document.querySelector('#bill');
inputBill.addEventListener('input', (e) => {
  billValue = e.target.value; // Sets global variable to the inputted value
  calcTotal(calcTipAmount(billValue, tipPercentValue, numOfPeopleValue));
});

// Creates an event listener for all the buttons inside the wrapper class and stores their value
// This is bubbling
const wrapperTips = document.querySelector('.wrapper');
wrapperTips.addEventListener('click', (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  const btnTips = document.querySelectorAll('.btn--tip');
  btnTips.forEach((btn) => {
    btn.disabled = false;
  });
  e.target.disabled = true;
  tipPercentValue = e.target.value;
  calcTotal(calcTipAmount(billValue, tipPercentValue, numOfPeopleValue));
});

// Store entered tip value to variable when input event is fired
const inputTipCustom = wrapperTips.querySelector('#input-tip');
inputTipCustom.addEventListener('input', (e) => {
  tipPercentValue = e.target.value;
  calcTotal(calcTipAmount(billValue, tipPercentValue, numOfPeopleValue));
});

// Store entered number of people value to variable when input event is fired
const inputNumOfPeople = document.querySelector('#numOfPeople');
inputNumOfPeople.addEventListener('input', (e) => {
  numOfPeopleValue = e.target.value;
  calcTotal(calcTipAmount(billValue, tipPercentValue, numOfPeopleValue));
  isValueZero();
});

const btnReset = document.querySelector('#btnReset');
btnReset.addEventListener('click', () => {
  billValue = 0;
  tipPercentValue = 0;
  numOfPeopleValue = 0;
  inputBill.value = null;
  inputTipCustom.value = null;
  inputNumOfPeople.value = null;
  displayTipAmount.textContent = '0.00';
  displayTotal.textContent = '0.00';
});
