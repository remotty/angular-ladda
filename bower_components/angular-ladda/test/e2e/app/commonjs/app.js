'use strict';

var angular = require('angular');

angular.module('testApp', [require('../../../src/angular-ladda.js')])
  .config(function (laddaProvider) {

  })
  .controller('TestController', ['$scope', function($scope) {
    $scope.buttonText = "ladda button";
  }]);
