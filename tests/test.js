const { expect } = require('chai');

const { ProcessName, ProcessNameConstants } = require('../index');


describe('tests process names', () => {
  it('should return correct process name', () => {
    expect(ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.CHROME][process.platform]).to.equal('Chrome');
    expect(ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.FIREFOX][process.platform]).to.equal('firefox');
  });
  it('should return undefined for invalid application', () => {
    expect(ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.ARSHAD]).to.equal(undefined);
  });
  it('should throw error for accessing invalid application', () => {
    try {
      ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.ARSHAD][process.platform];
    } catch (err) {      
      expect(err.message).to.equal(`Cannot read property '${process.platform}' of undefined`);
    }
  });
});
