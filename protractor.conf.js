// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {         
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'angular-ladda-chrome'
  },{
    'browserName': 'internet explorer',
    'version': '11',
    'platform': 'Windows 8.1',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'angular-ladda-ie11'
  },{
    'browserName': 'internet explorer',
    'version': '9',
    'platform': 'Windows 7',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'angular-ladda-ie9'
  }],

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
