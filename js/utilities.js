function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

//save data to local storage
const saveDataToLS = (key,balance,totalBalance) =>{
  localStorage.setItem(key,balance);
  localStorage.setItem('Balance',totalBalance);
}

//get data from local storage
const getDataToLS = () =>{
  const totalDeposit = localStorage.getItem('Deposit');
  const totalWithdraw = localStorage.getItem('Withdraw');
  const totalBalance = localStorage.getItem('Balance');
  if(isNaN(totalDeposit,totalWithdraw,totalBalance)){
    return;
  }
  setTextElementValueById('deposit-total',totalDeposit);
  setTextElementValueById('withdraw-total',totalWithdraw);
  setTextElementValueById('balance-total',totalBalance);
}
getDataToLS();

document.getElementById('btn-reset').addEventListener('click',function(){
  localStorage.setItem('Balance',1240);
  localStorage.setItem('Withdraw',00);
  localStorage.setItem('Deposit',00);
  getDataToLS();
})