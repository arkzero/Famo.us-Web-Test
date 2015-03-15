/*globals angular*/

(function (angular) {
  'use strict';

  var module = angular.module('canvsTest');

  module.controller('NavPatternCtrl', [
    '$scope', '$famous',
    function ($scope, $famous) {
      var NavPatternCtrl = {};

      NavPatternCtrl.EventHandler = $famous['famous/core/EventHandler'];
      NavPatternCtrl.Transitionable = $famous['famous/transitions/Transitionable'];

      $scope.eventHandler = NavPatternCtrl.EventHandler();

      $scope.menuOpen = false;

      NavPatternCtrl.menuItems = [
        {
          _id: 0,
          name: 'Menu Item 0',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 250,
          transYValue: 25
        },
        {
          _id: 1,
          name: 'Menu Item 1',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 150,
          transYValue: 25
        },
        {
          _id: 2,
          name: 'Menu Item 2',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 225,
          transYValue: 150
        },
        {
          _id: 3,
          name: 'Menu Item 3',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 125,
          transYValue: 100
        },
        {
          _id: 4,
          name: 'Menu Item 4',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 75,
          transYValue: 250
        },
        {
          _id: 5,
          name: 'Menu Item 5',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 50,
          transYValue: 150
        }
      ];

      $scope.openMenu = function () {
        if (!$scope.menuOpen) {
          $scope.menuItems = NavPatternCtrl.menuItems;
          $scope.menuOpen = true;
        } else {
          $scope.menuItems = [];
          $scope.menuOpen = false;
        }

      };

      $scope.openMenuItem = function (item) {
        $scope.openMenu();
      };

      $scope.menuItemEnter = function (item) {
        item.transX.set(item.transXValue, {duration: 750, curve: 'easeOut'});
        item.transY.set(item.transYValue, {duration: 750, curve: 'easeOut'});
        return 750;
      };

      $scope.menuItemLeave = function (item) {
        item.transX.set(0, {duration: 750, curve: 'easeOut'});
        item.transY.set(0, {duration: 750, curve: 'easeOut'});
        return 750;
      };
    }
  ]);

}(angular));