const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/public/img/favicon.ico'
    })

    win.setMenuBarVisibility(false)

    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindow()
})