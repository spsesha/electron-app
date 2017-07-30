const {app, BrowserWindow, Menu, shell} = require('electron')
const path = require('path')
const url = require('url')

let win
let aboutWin

let template = [{
  label: 'Help',
  submenu: [
    {
      label: 'About',
      click: aboutClick
    }
  ]
}];

function aboutClick(){
  aboutWin.show()
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createWindow(){

  win = new BrowserWindow({
    width: 800,
    height: 700,
    resizable: false,
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file',
    slashes: true
  }))

  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  aboutWin = new BrowserWindow({
    parent: win,
    modal: true,
    show: false,
    height: 570,
    width: 700,
    resizable: false,
  })

  aboutWin.loadURL(url.format({
    pathname: path.join(__dirname, '/app/about.html'),
    protocol: 'file',
    slashes: true
  }))
  aboutWin.setMenu(null)

  aboutWin.on('close', e => {
    e.preventDefault();
    aboutWin.hide();
  })

  aboutWin.webContents.on('new-window', (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  })

  aboutWin.webContents.openDevTools()

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', () => {
  if(win === null){
    createWindow()
  }
})
