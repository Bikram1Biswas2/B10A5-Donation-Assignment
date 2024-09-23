// common function for redirect page
function navigateToPage(url){
    window.location.href= url;
}


// common function for get Input Value
function getInputField(id){
   
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    if(isNaN(inputValue) || inputValue <=0){
        alert('please enter a valid amount');
        return 0;
    }
    return inputNumber;
}

// Function to handle the donation

function handleDonate(inputFieldId, cardBalanceId){

    // get the donation amount
    const donationAmount = getInputField(inputFieldId);
    if(donationAmount === 0)
    return;

    // main balance
const mainBalanceElement = document.getElementById('main-balance');

let mainBalance = parseFloat(mainBalanceElement.innerText)

if(donationAmount > mainBalance){
    alert('Insufficient Balance for donation')
    return;
}

mainBalance -= donationAmount
mainBalanceElement.innerText = mainBalance.toFixed(2)

const cardBalanceEl = document.getElementById(cardBalanceId)

let currentCardBalance = parseFloat(cardBalanceEl.innerText);
currentCardBalance += donationAmount;
cardBalanceEl.innerText = currentCardBalance.toFixed(2)

// Clear the input field
document.getElementById(inputFieldId).value = '';

// Modal
document.getElementById('my_modal_1').showModal()

}

