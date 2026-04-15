const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // 브라우저 창 생성
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    // 상단 기본 메뉴바를 숨기고 싶다면 아래 주석을 해제하세요.
    // autoHideMenuBar: true 
  });

  // index.html 로드
  win.loadFile('index.html');
}

// 앱이 준비되면 창을 띄움
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 모든 창이 닫히면 앱 종료 (macOS 제외)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});