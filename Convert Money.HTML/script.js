const ConvButton = document.querySelector("button#convertButton")
const SelectedCurrency = document.querySelector("Select.SelCurrencyCoverted")
const SelectConvertCurrency = document.getElementById("SelConvertCurrency")



function changeFlagAndName() {
    const CurrecyImg = document.querySelector("img.br")
    const SelectConvertCurrencyText = document.querySelector("p.Real-Dol")
    const OtherCurrencyText = document.querySelector("p#USDcurrency")
    const OtherCurrencyImgChange = document.querySelector("img.usaflag")

    if (SelectConvertCurrency.value == "1") {
        SelectConvertCurrencyText.innerHTML = "R$ Real"
        CurrecyImg.src = "../img/Brasil 2.png"
    }

    if (SelectConvertCurrency.value == "5.89") {
        SelectConvertCurrencyText.innerHTML = "$ Dólar Americano"
        CurrecyImg.src = "../img/estados-unidos (1) 1.png"
    }

    if (SelectConvertCurrency.value == "6.10") {
        SelectConvertCurrencyText.innerHTML = "€ Euro"
        CurrecyImg.src = "../img/Design sem nome 3.png"
    }

    if (SelectConvertCurrency.value == "1") {
        SelectConvertCurrencyText.innerHTML = "R$ Real"
        CurrecyImg.src = "../img/Brasil 2.png"
    }
    if (SelectConvertCurrency.value == "7.28") {
        SelectConvertCurrencyText.innerHTML = "Libra"
        CurrecyImg.src = "../img/Libra 1.png"
    }

    if (SelectConvertCurrency.value == "599.074") {
        SelectConvertCurrencyText.innerHTML = "₿ BTC"
        CurrecyImg.src = "../img/Bitcoin 1.png"
    }

    //a partir daqui segundo SELECT         

    if (SelectedCurrency.value == "5.89") {
        OtherCurrencyText.innerHTML = "$ Dólar Americano"
        OtherCurrencyImgChange.src = "../img/estados-unidos (1) 1.png"
    }

    if (SelectedCurrency.value == "6.10") {
        OtherCurrencyText.innerHTML = "€ Euro"
        OtherCurrencyImgChange.src = "../img/Design sem nome 3.png"
    }

    if (SelectedCurrency.value == "1") {
        OtherCurrencyText.innerHTML = "R$ Real"
        OtherCurrencyImgChange.src = "../img/Brasil 2.png"
    }

    if (SelectedCurrency.value == "7.28") {
        OtherCurrencyText.innerHTML = "Libra"
        OtherCurrencyImgChange.src = "../img/Libra 1.png"
    }

    if (SelectedCurrency.value == "599.074") {
        OtherCurrencyText.innerHTML = "₿ BTC"
        OtherCurrencyImgChange.src = "../img/Bitcoin 1.png"

    }
    ConvertValues()


}
function ConvertValues() {
    const InputValue = document.querySelector("input#inputConvert").value

    const BRLValue = document.querySelector("p#BRLvalue") // Valor Real
    const OtherCurrency = document.querySelector("p#OtherValue") // Outras Moedas
    const SelectCurrency = document.querySelector("Select.SelCurrencyCoverted")
    const fromCurrencyValue = SelectConvertCurrency.value
    const toCurrencyValue = SelectedCurrency.value
    const convertedValue = (InputValue / fromCurrencyValue) * toCurrencyValue;

    if (toCurrencyValue == "1") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('pt-BR', { style: 'currency', currency: 'BRL' }).format(convertedValue);
        }

    if (toCurrencyValue == "5.89") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'USD' }).format(convertedValue);
        }

    if (toCurrencyValue == "6.10") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('en-EU', { style: 'currency', currency: 'EUR' }).format(convertedValue);
        }

    if (toCurrencyValue == "7.28") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('en-UK', { style: 'currency', currency: 'GBP' }).format(convertedValue);
        }

    if (toCurrencyValue == "599.074") {
        OtherCurrency.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'BTC' }).format(convertedValue);
        }
       
    // mudança de valor do primeiro parágrafo



    if (SelectConvertCurrency.value == "1") {
        BRLValue.innerHTML = new Intl.NumberFormat
            ('pt-BR', { style: 'currency', currency: 'BRL' }).format(InputValue)
    }

    if (SelectConvertCurrency.value == "5.89") {
        BRLValue.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'USD' }).format(InputValue)
    }

    if (SelectConvertCurrency.value == "6.10") {
        BRLValue.innerHTML = new Intl.NumberFormat
            ('en-EU', { style: 'currency', currency: 'EUR' }).format(InputValue)
    }

    if (SelectConvertCurrency.value == "7.28") {
        BRLValue.innerHTML = new Intl.NumberFormat
            ('en-UK', { style: 'currency', currency: 'GBP' }).format(InputValue)
    }

    if (SelectConvertCurrency.value == "599.074") {
        BRLValue.innerHTML = new Intl.NumberFormat
            ('en-US', { style: 'currency', currency: 'BTC' }).format(InputValue)
    }


}

ConvButton.addEventListener("click", ConvertValues)

SelectedCurrency.addEventListener("change", changeFlagAndName)

SelectConvertCurrency.addEventListener("change", changeFlagAndName)


