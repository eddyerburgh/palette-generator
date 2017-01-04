// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'palette is generated when random-palette button is clicked': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
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
};
