(function() {
  'use strict';

  angular
    .module('fc.clear', [])
    .directive('fcclear', FcClear);

  /**
   * @ngInject
   */
  function FcClear() {
    return {
      restrict: 'A',
      scope: {
        right: '@'
      },
      controller: Controller,
      controllerAs: 'vm',
      template: ''
    };
  }

  /**
   * @ngInject
   */
  function Controller($scope) {
    
  }

})();