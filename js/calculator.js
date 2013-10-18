'use strict';

angular.module('Calculator2', []).

controller('calculator', function (
    $scope
) {
    $scope.display = '0';

    this.pressNum = function (num) {
        $scope.display = num;
    }
});