
function updateCaseNumber(isIncrease){
    const inputFieldValue = document.getElementById('case-quantity');
    const previousValue = parseInt(inputFieldValue.value);
    let newCaseValue;
    if(isIncrease){
        newCaseValue = previousValue + 1;
    }
    else{
        if(previousValue <= 0){ return 0;}
        newCaseValue = previousValue - 1;
    }
    inputFieldValue.value = newCaseValue;
    return newCaseValue;
}

function updateCasePrice(caseNumber){
    const price = document.getElementById('case-price');
    price.innerText = caseNumber * 59;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseValue = updateCaseNumber(true);
    updateCasePrice(newCaseValue);
    calculateFinalTotal();
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseValue = updateCaseNumber(false);
    updateCasePrice(newCaseValue);
    calculateFinalTotal();
});
