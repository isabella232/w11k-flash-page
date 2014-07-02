'use strict';

angular.module('app', [
  'w11k.flash',
  'w11k.flash.template'
]);

angular.module('app').controller('DemoCtrl', function ($scope) {
  $scope.flash = {
    visible: false,
    config: {
      swfUrl: '@@cacheBustingDir/assets/test.swf',
      width: 600,
      height: 180,
      callback: function (readyPromise) {
        $scope.flash.ready = readyPromise;
      }
    }
  };

  $scope.toggle = function () {
    $scope.flash.visible = !$scope.flash.visible;
  };

  $scope.me = {
    name: 'AngularJS'
  };

  $scope.talkToMe = function (message) {
    $scope.message = message;
    $scope.response = 'Hello! My name is ' + $scope.me.name + '.'

    return $scope.response;
  };

  $scope.talkToFlex = function () {
    if (angular.isDefined($scope.flash.ready)) {
      $scope.flash.ready.then(function (flash) {
        $scope.message = 'Hello! My name is ' + $scope.me.name + '. What is your name?';
        // call exposed ActionScript function
        $scope.response = flash.talkToMe($scope.message);
      });
    }
  };

  $scope.navigateFlashTo = function (state) {
    if (angular.isDefined($scope.flash.ready)) {
      $scope.flash.ready.then(function (flash) {
        // call exposed ActionScript function
        flash.navigateTo(state);
      });
    }
  };

});
