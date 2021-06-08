//const services = require('./foreground-services.js')

  window.onload = () => {
    document.getElementById('fn-addNumbers').onclick = addNumbersAsync
    console.log('init addNumbersAsync')
  }
  
  async function addNumbersAsync(evt) {
    console.log('called addNumbersAsync')

    const results = window.api.services.addNumbersAsync(1, 1000)
    const buffer = window.api.services.resultBuffer
  }
  