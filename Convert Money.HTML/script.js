const ConvButton = document.querySelector ("button#convertButton")

function ConvertValues(){
    const InputValue = document.querySelector ("input#inputConvert").value

    const BRLValue = document.querySelector ("p#BRLvalue") // Valor Real
    const OtherCurrency = document.querySelector ("p#OtherValue") // Outras Moedas

  
    const dolarToday = 6.20

    const FinalValue = dolarToday / InputValue

    BRLValue.innerHTML = InputValue

    OtherCurrency.innerHTML = FinalValue


    BRLValue.innerHTML = new Intl.NumberFormat
    ('pt-BR', { style: 'currency', currency: 'BRL' }).format(InputValue)

    OtherCurrency.innerHTML = new Intl.NumberFormat
    ('en-US', { style: 'currency', currency: 'USD' }).format(FinalValue)

   
    

    

    

    // console.log(FinalValue)

}

ConvButton.addEventListener("click", ConvertValues)

