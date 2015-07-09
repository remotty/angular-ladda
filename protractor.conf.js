// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {         
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'chrome'
  }, {
    'browserName': 'safari',
    'version': '8',
    'platform': 'OS X 10.10',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'safari-8'
  }, {
    'browserName': 'internet explorer',
    'version': '11',
    'platform': 'Windows 8.1',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'ie-11'
  }, {
    'browserName': 'iPhone',
    'version': '8.2',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'iphone-8.2'
  }/*, {
    'browserName': 'internet explorer',
    'version': '9',
    'platform': 'Windows 7',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'ie-9'
  }, {
    'browserName': 'android',
    'version': '4.4',
    'platform': 'Linux',
    'deviceName': 'Samsung Galaxy S3 Emulator',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'android-4.4'
  }*/],

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
