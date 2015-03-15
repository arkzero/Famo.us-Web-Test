/*globals angular*/

(function (angular) {
  'use strict';

  angular.module('canvsTest', ['famous.angular', 'ui.router']).config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // Redirect
      $urlRouterProvider.otherwise('/nav-pattern');

      $stateProvider
        .state('nav-pattern', {
          url: '/nav-pattern',
          templateUrl: '/views/nav-pattern.html',
          controller: 'NavPatternCtrl'
        });

    }
  ])

}(angular));