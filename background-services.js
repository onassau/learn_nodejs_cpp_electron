// background-services.js
// handles the c++ backend

const { ipcMain } = require('electron')
//const my_app = require('./my_app.js')
const my_app = require('./build/Release/addon.node');


function addNumbersAsync(evt, arg1, arg2) {
  //if (DEBUG)
  console.log('ipcMain: addNumbersAsync invoked: ' + arg1 + ', ' + arg2)

  my_app.addNumbers(arg1, arg2) // TODO return sum, and push that to addNumbersAsync-done arg

  evt.reply('addNumbersAsync-done', 1)
  //if (DEBUG)
    console.log('ipcMain: replied with TODO: addNumbersAsync-done')

    //   dbr.decodeFileAsync(filepath, barcodeTypes, (err, msg) => {
    //     if (err)
    //       console.log(err)
    //     let results = [];
    //     for (index in msg) {
    //       let result = Object()
    //       let res = msg[index];
    //       result.format = res['format']
    //       result.value = res['value']
    //       results.push(result)
    //     }
    //     evt.reply('decodeFileAsync-done', results)
    //     if (DEBUG)
    //       console.log('ipcMain: replied with ' + JSON.stringify(results))
    //   })
}

function register() {
    //if (DEBUG)
      console.log('background service to register')
    ipcMain.on('addNumbersAsync', addNumbersAsync)
}

module.exports = {
    register
}
