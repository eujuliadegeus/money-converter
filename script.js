const button = document.getElementById('button')
const select = document.getElementById('select')


const dolar = 5.03
const euro = 5.57


const convertedValues = () => {
    const input = document.getElementById('input').value

    const realNewValue = document.getElementById('newValueReal')
    realNewValue.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }).format(input);

    if (select.value === 'US$ Dólar Americano') {
        const currencyNewValue = document.getElementById('currencyNewValue')
        currencyNewValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }).format(input / dolar);
    }

    if (select.value === '€ Euro') {
        const currencyNewValue = document.getElementById('currencyNewValue')
        currencyNewValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }).format(input / euro);
    }
}

const coinChange = () => {
    const coinName = document.getElementById('coinName')
    const coinImage = document.getElementById('coinImage')

    if (select.value === '€ Euro') {
        coinName.innerHTML = "Euro"
        coinImage.src = "./assets/euro.png"
    }

    if (select.value === 'US$ Dólar Americano') {
        coinName.innerHTML = "Dólar Americano"
        coinImage.src = "./assets/eua.png"
    }

    convertedValues ()

}

button.addEventListener('click', convertedValues)
select.addEventListener('change', coinChange)

