module.exports = {
  'palette is generated when random-palette button is clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 10000)
      .assert.elementPresent('#random-palette')
      .assert.elementCount('.swatch', 0)
      .click('#random-palette')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .end();
  },
  'palette is generated when valid hex is typed in input': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 10000)
      .assert.elementPresent('#generate-palette')
      .assert.elementCount('.swatch', 0)
      .setValue('#generate-palette', '#fff')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .end();
  },

};
