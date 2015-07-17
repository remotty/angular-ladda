define([
  'angular',
  '/dist/angular-ladda.min.js'
], function (ng) {
  'use strict';

  return ng.module('testApp', ['angular-ladda'])
    .config(function (laddaProvider) {

    })
    .controller('TestController', ['$scope', function($scope) {
      $scope.buttonText = "ladda button";
    }]);
});
