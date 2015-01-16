// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {         
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  capabilities: {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'angular-seo-header'
  },

  specs: [
    './test/e2e/spec/**/*.js'
  ],

  // Options to be passed to Jasmine-node.
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
