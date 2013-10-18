'use strict';

angular.module('Calculator2', []).

controller('calculator', function (
    $scope
) {
    var self = this;

    self.maxDigits = 8;
    self.dotMode = false;
    self.hasDot = false;

    self.pressNum = function (num) {
        if ($scope.screen === '0') {
            if (!self.dotMode) {
                $scope.screen = '';
            }
        }

        if ($scope.screen.length < 12) {
            if (self.dotMode) {
                $scope.screen += '.';
            }
            $scope.screen += num;
        }

        self.dotMode = false;
    };

    self.clearScreen = function () {
        $scope.screen = '0';
        self.dotMode = false;
        self.hasDot = false;
    };

    self.changeSign = function () {
        if ($scope.screen === '0') {
            return false;
        }

        var signPos = $scope.screen.indexOf('-');
        if (signPos === -1) {
            $scope.screen = '-' + $scope.screen;
        } else {
            $scope.screen = '' + Math.abs($scope.screen);
        }
    }

    self.addDot = function () {
        if (!self.hasDot) {       
            self.dotMode = true;        
        }        
        self.hasDot = true;
    }

    self.clearScreen();
});