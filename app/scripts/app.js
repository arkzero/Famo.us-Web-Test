/*globals angular*/

(function (angular) {
  'use strict';

  angular.module('canvsTest', ['famous.angular', 'ui.router']).config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // Redirect
      $urlRouterProvider.otherwise('/drag-test');

      $stateProvider
          .state('page', {
            url: '',
            abstract: true,
            views: {
              '@': {
                templateUrl: '/views/parent.html'
              },
              'navPattern@page': {
                templateUrl: '/views/nav-pattern.html',
                controller: 'NavPatternCtrl'
              }
            }
          })
          .state('page.drag', {
            url: '/drag-test',
            views: {
              'content@page': {
                templateUrl: '/views/drag-test.html',
                controller: 'DragTestCtrl'
              }
            }
          })
          .state('page.board', {
            url: '/board-test',
            views: {
              'content@page': {
                templateUrl: '/views/board-test.html',
                controller: 'BoardTestCtrl'
              }
            }
          })
          .state('page.taskBoard', {
            url: '/task-board',
            views: {
              'content@page': {
                templateUrl: '/views/task-board.html',
                controller: 'TaskBoardCtrl'
              }
            }
          });

    }
  ]);

}(angular));