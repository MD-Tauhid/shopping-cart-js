function calculateFinalTotal(){
    const phonePrice = document.getElementById('phone-price');
    const phonePriceString = phonePrice.innerText;
    const phonePriceInt = parseInt(phonePriceString);

    const casePrice = document.getElementById('case-price');
    const casePriceString =casePrice.innerText;
    const casePriceInt = parseInt(casePriceString);

    const newSubTotal = phonePriceInt + casePriceInt;

    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = newSubTotal;

    const tax = document.getElementById('tax');
    const taxInt = parseInt(tax.innerText);
    const newTaxFloat = newSubTotal * 0.1;
    const newTax = parseInt(newTaxFloat)
    tax.innerText = newTax;

    const total = document.getElementById('final-total');
    const newTotal = newSubTotal + newTax;
    total.innerText = newTotal;

}