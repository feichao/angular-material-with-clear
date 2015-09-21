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
        fcClass: '@',
        fcIconClass: '@'
      },
      controllerAs: 'vm',
      template: '',
      compile: Compile
    };
  }

  /**
   * @ngInject
   */

  function Compile(tEle, tAttrs, transcludeFn) {
    var tplDiv = angular.element('<div class="clear-content"></div>');
    var tplClear = angular.element([
      '<ng-md-icon icon="cancel" size="18" class="clear-icon">',
      ' <md-tooltip>',
      '   Clear',
      ' </md-tooltip>',
      '</ng-md-icon>'
    ].join(''));

    tplDiv.css({
      position: 'relative',
      width: '400px'
    });

    var model = tEle.find('input').attr('ng-model');
    tplClear.attr('ng-click', model + '=""');
    tplClear.attr('ng-show', model);
    tplClear.css({
      position: 'absolute',
      top: '8px',
      right: '10px',
      fill: '#666',
      height: '18px',
      width: '18px',
      cursor: 'pointer',
      outline: 'none'
    });

    var tplEle = tEle.clone();
    tplEle.removeAttr('fcclear');
    tplEle.removeAttr('fc-class');
    tplEle.removeAttr('fc-icon-class');

    tplDiv.append(tplEle);
    tplDiv.append(tplClear);
    tEle.replaceWith(tplDiv);


    console.log(tEle);
    console.log(tAttrs);
    console.log(transcludeFn);
    return function(scope, ele, attrs) { 
      console.log(ele.css());
      console.log(scope.fcIconClass);
    };
  }

})();
