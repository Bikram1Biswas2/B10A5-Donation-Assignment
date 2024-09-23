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

function handleDonate(inputFieldId, cardBalanceId,cardTitle){

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

// history list
const historyList = document.getElementById('history-list')

const historyItem = document.createElement('div')
historyItem.classList.add('border', 'border-gray-300', 'rounded-md')

const h4 =document.createElement('h4');
h4.classList.add('text-lg','font-bold')
const P = document.createElement('p')
P.classList.add('text-gray-500')
 const date = new Date().toLocaleString(); 
h4.innerText = `
${donationAmount} Taka is Donated for ${cardTitle}
  
`
P.innerText = `
Date: ${date}
`
historyItem.appendChild(h4)
historyItem.appendChild(P)

historyList.appendChild(historyItem)

}

// handle history-btn
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('donation-card').style.display = 'none';
    document.getElementById('history-container').style.display = 'block';

    // btn-change
    document.getElementById('history-btn').classList.add('btn-green');
    document.getElementById('history-btn').classList.remove('btn-outline');
    document.getElementById('donation-btn').classList.add('btn-outline')
    document.getElementById('donation-btn').classList.remove('btn-green')

})

// handle donation btn
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('history-container').style.display = 'none';
    document.getElementById('donation-card').style.display = 'block';

    // btn-change
    document.getElementById('donation-btn').classList.add('btn-green');
    document.getElementById('donation-btn').classList.remove('btn-outline');
    document.getElementById('history-btn').classList.add('btn-outline')
    document.getElementById('history-btn').classList.remove('btn-green')

})