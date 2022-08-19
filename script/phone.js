
function updatePhoneQuantity(isIncrease){
    const inputFieldValue = document.getElementById('phone-quantity');
    const previousValue = parseInt(inputFieldValue.value);
    let newPhoneValue;
    if(isIncrease){
        newPhoneValue = previousValue + 1;
    }
    else{
        if(previousValue <= 0){ return 0;}
        newPhoneValue = previousValue - 1;
    }
    inputFieldValue.value = newPhoneValue;
    return newPhoneValue;
}

function updatePhonePrice(phoneQuantity){
    const price = document.getElementById('phone-price');
    const phonePrice = phoneQuantity * 1219;
    price.innerText = phonePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneValue = updatePhoneQuantity(true);
    updatePhonePrice(newPhoneValue);
    calculateFinalTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneValue = updatePhoneQuantity(false);
    updatePhonePrice(newPhoneValue);
    calculateFinalTotal();
    
})