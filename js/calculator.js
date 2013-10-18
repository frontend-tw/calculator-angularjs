'use strict';

angular.module('Calculator2', []).

controller('calculator', function (
    $scope
) {
    var self = this;
    $scope.screen = '0';
    self.pressNum = function (num) {
        if ($scope.screen === '0') {
            $scope.screen = '';    
        }
        $scope.screen += num;
    }
});