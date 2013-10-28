'use strict';

var Model = function () {
    this.value = 123;
    this.add = function () {
        this.value = this.value + 1;
    };
};

angular.module('ModelTest', []).
controller('ctrl', function ($scope) {
        $scope.model = new Model();
});
