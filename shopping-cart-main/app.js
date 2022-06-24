


function updateCaseNumber(product, price, isIncrease){
    
    const caseInput = document.getElementById( product+  '-number')
    let caseNumber = caseInput.value;

    if(isIncrease== true){
        caseNumber = parseInt(caseNumber) + 1

    }
    else if(caseNumber>0){
      caseNumber  = parseInt(caseNumber) - 1
    }
    caseInput.value = caseNumber
    const caseTotal =   document.getElementById( product+'-total')
    caseTotal.innerText = caseNumber * price

    calculateTotal()
}

function getInputValue(product){

    const phoneInput =  document.getElementById(product +'-number')
    const phoenNumber = parseInt(phoneInput.value)
    return phoenNumber
}


function calculateTotal(){
    
   const phoneTotal = getInputValue('phone') * 1219
   const caseTotal = getInputValue('case') * 59
    
    

   const subTotal = phoneTotal + caseTotal
   const tax = caseTotal /10
   const totalPrice = subTotal + tax
   console.log(subTotal)
   document.getElementById('sub-total').innerText = subTotal
   document.getElementById('tax-amount').innerText = tax
   document.getElementById('total-price').innerText = totalPrice
  

}


// case increase 
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case', 59 ,true )
})

// case decrease

document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case',59, false)
   
    
})

// phone increase
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber( 'phone',1219, true)
   
    
})
// phone decrease
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber( 'phone',1219, false)
   
    
})