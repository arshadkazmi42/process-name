const CONSTANTS = require('./constants');


module.exports = {
  BROWSERS: {
    [CONSTANTS.BROWSERS.CHROME]: {
      [CONSTANTS.OS.MACOS]: 'Chrome',
      [CONSTANTS.OS.LINUX]: 'chrome',
      [CONSTANTS.OS.WINDOWS]: 'chrome.exe'
    },
    [CONSTANTS.BROWSERS.FIREFOX]: {
      [CONSTANTS.OS.MACOS]: 'firefox',
      [CONSTANTS.OS.LINUX]: 'firefox',
      [CONSTANTS.OS.WINDOWS]: 'firefox.exe'
    }
  }
};
