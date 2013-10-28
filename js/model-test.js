'use strict';

var Model = function () {
    this.value = 123;
};

angular.module('ModelTest', []).
controller('ctrl', function ($scope) {
        $scope.model = new Model();
});
