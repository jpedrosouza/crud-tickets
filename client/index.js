const { app, BrowserWindow } = require('electron')
    // creating the window
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/public/img/favicon.ico' //specifying the menu icon
    })

    win.setMenuBarVisibility(false) //deleting the default menu of electron

    win.loadURL('http://localhost:3000') //loading the react into the electron
}
// creating the window when everything is ready
app.whenReady().then(() => {
    createWindow()
})