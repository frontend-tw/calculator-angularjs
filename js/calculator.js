'use strict';

angular.module('Calculator2', []).

controller('calculator', function (
    $scope
) {
    var self = this;

    self.maxDigits = 8;

    $scope.screen = '0';
    self.pressNum = function (num) {
        if ($scope.screen === '0') {
            $scope.screen = '';    
        }

        if ($scope.screen.length < 12) {
            $scope.screen += num;
        }
    }
});