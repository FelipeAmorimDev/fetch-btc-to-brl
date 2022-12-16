const btcElement = document.querySelector('.btc-value')

const refreshBtcValue = () => {
  fetch('https://blockchain.info/ticker')
  .then(resolve => {
    return resolve.json()
  }).then(bodyJson => {
    const btcToBrl = bodyJson.BRL.sell
    btcElement.textContent = `R$ ${btcToBrl}`})
}
 
refreshBtcValue()
setInterval(consultBtcValue,30000)


