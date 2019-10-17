const CONSTANTS = require('./constants');


module.exports = {
  BROWSERS: {
    [CONSTANTS.BROWSERS.CHROME]: {
      [CONSTANTS.OS.MACOS]: 'Google Chrome',
      [CONSTANTS.OS.LINUX]: 'chrome',
      [CONSTANTS.OS.WINDOWS]: 'chrome.exe'
    },
    [CONSTANTS.BROWSERS.FIREFOX]: {
      [CONSTANTS.OS.MACOS]: 'firefox',
      [CONSTANTS.OS.LINUX]: 'firefox',
      [CONSTANTS.OS.WINDOWS]: 'firefox.exe'
    }
  },
  EDITORS: {
    [CONSTANTS.EDITORS.VSCODE]: {
      [CONSTANTS.OS.MACOS]: 'Code',
      [CONSTANTS.OS.LINUX]: 'code',
      [CONSTANTS.OS.WINDOWS]: 'code.exe'
    }
  }
};
