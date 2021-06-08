// foreground-services.js
// handles the web part

const { ipcRenderer } = require('electron')

const resultBuffer = {
  lastUpdate: null,
  results: 0
}

function addNumbersAsync(arg1, arg2) {
  //if (DEBUG)
    console.log('sending addNumbersAsync from renderer process with args: ' + arg1 + ', ' + arg2)
  ipcRenderer.send('addNumbersAsync', arg1, arg2)
}

ipcRenderer.on('addNumbersAsync-done', (evt, sum) => {
    console.log('addNumbers is done, sum is: ' + sum)
    resultBuffer.lastUpdate = Date.now()
    resultBuffer.results = sum
})

module.exports = {
    addNumbersAsync,
    resultBuffer
}
