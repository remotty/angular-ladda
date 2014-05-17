# angular-ladda

AngularJS directive for Ladda

## Quick example

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
