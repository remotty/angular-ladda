describe('Double curly binding test', function() {
  beforeEach(function () {
    browser.get('/binding.html');
  });

  it('should compile binding', function() {
    browser.sleep(1000);
    expect(element(by.css('#loader1 .ladda-spinner div')).isPresent()).toBe(true);
  });
});
