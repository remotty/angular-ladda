# angular-ladda

AngularJS directive for Ladda

## Quick example

### index.html

```html
...
<link rel="stylesheet" href="bower_components/ladda/dist/ladda-themeless.min.css">
...
<script src="bower_components/ladda/js/spin.js"></script>
<script src="bower_components/ladda/js/ladda.js"></script>
<script src="bower_components/angular-ladda/dist/angular-ladda.js"></script>
...
```

### controller

```javascript
  $scope.loginLoading = false;
  $scope.login = function() {
    // start loading
    $scope.loginLoading = true;
    var loginService = loginService.login(function() {
      // stop loading
      $scope.loginLoading = false;
    });
  }
```

### view

```html
<button type="submit" class="btn btn-default" ladda="loginLoading" ng-click="login">
  Login
</button>
```

## Links

* [ladda](http://lab.hakim.se/ladda/)

## Contributing

1. Fork it ( https://github.com/remotty/angular-ladda/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
