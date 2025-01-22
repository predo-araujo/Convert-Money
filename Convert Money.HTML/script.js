const ConvButton = document.querySelector("button#convertButton")
const SelectedCurrency = document.querySelector("Select.SelDolarEuro")



function changeFlagAndName() {
    const OtherCurrencyText = document.querySelector("p#USDcurrency")
    const CurrecyImg = document.querySelector("img.usaflag")

    if (SelectedCurrency.value == "dolar") {
        OtherCurrencyText.innerHTML = "$ Dólar Americano"
        CurrecyImg.src = "../img/estados-unidos (1) 1.png"
    }

    if (SelectedCurrency.value == "euro") {
        OtherCurrencyText.innerHTML = "€ Euro"
        CurrecyImg.src = "../img/Design sem nome 3.png"
    }
    ConvertValues()    

}
function ConvertValues() {
    const InputValue = document.querySelector("input#inputConvert").value

    const BRLValue = document.querySelector("p#BRLvalue") // Valor Real
    const OtherCurrency = document.querySelector("p#OtherValue") // Outras Moedas
    const SelectCurrency = document.querySelector("Select.SelDolarEuro").value
    
    


    const dolarToday = 6.09
    const euroToday = 6.20



    if (SelectCurrency == "dolar") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'USD' }).format(InputValue / dolarToday)
    }


    if (SelectCurrency == "euro") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('en-UK', { style: 'currency', currency: 'EUR' }).format(InputValue / euroToday)

    }

    BRLValue.innerHTML = new Intl.NumberFormat
        ('pt-BR', { style: 'currency', currency: 'BRL' }).format(InputValue)

}

ConvButton.addEventListener("click", ConvertValues)

SelectedCurrency.addEventListener("change", changeFlagAndName)




