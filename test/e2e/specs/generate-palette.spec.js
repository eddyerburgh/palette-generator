module.exports = {
  'palette is generated when random-palette button is clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#random-generate', 10000)
      .assert.elementCount('.palette--main .swatch', 0)
      .click('#random-generate')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.palette--main .swatch', 4)
      .end();
  },

  'palette is generated when valid hex is typed in input': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 10000)
      .assert.elementPresent('#generate-palette')
      .assert.elementCount('.palette--main .swatch', 0)
      .setValue('#generate-palette', '#fff')
      .click('#generate-palette-submit')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.palette--main .swatch', 4)
      .end();
  },

  'clicking radio button with value rgb sets swatch color text to be rgb': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
          .url(devServer)
          .waitForElementVisible('#app', 10000)
          .setValue('#generate-palette', '#fff')
          .click('#generate-palette-submit')
          .waitForElementVisible('.swatch', 10000)
          .assert.containsText('.palette--main .swatch:first-of-type', '#FFFFFF')
          .click('[value="rgb"]')
          .assert.containsText('.palette--main .swatch:first-of-type', 'rgb(255, 255, 255)')
          .end();
  },

  'history list is created when new palette added that can be clicked on to regenerate palette': function test(browser) {
    const devServer = `${browser.globals.devServerURL}/555444`;

    browser
      .url(devServer)
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.palette--main .swatch', 4)
      .assert.elementCount('.palette--history-list .swatch', 4)
      .click('#random-generate')
      .assert.elementCount('.palette--history-list .swatch', 8)
      .click('.palette--history-list__container:nth-of-type(2) .palette--history-list')
      .assert.cssProperty('.palette--main .swatch:first-of-type', 'background-color', 'rgba(85, 84, 68, 1)')
      .end();
  },
};
