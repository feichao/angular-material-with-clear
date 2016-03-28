(function() {
  'use strict';

  angular
    .module('fc.clear', [])
    .directive('fcclear', FcClear);

  function FcClear() {
    return {
      restrict: 'A',
      scope: {
        fcClass: '@',
        fcIconClass: '@',
        fcModelType: '@'
      },
      controllerAs: 'vm',
      template: '',
      compile: Compile
    };
  }

  function Compile(tEle, tAttrs, transcludeFn) {
    // init clear element
    var tplDiv = angular.element('<div class="clear-content"></div>');
    var tplClear = angular.element([
      '<ng-md-icon icon="cancel" size="18" class="clear-icon">',
      ' <md-tooltip>',
      '   Clear',
      ' </md-tooltip>',
      '</ng-md-icon>'
    ].join(''));


    var model = tEle.find('input').attr('ng-model') || tEle.attr('ng-model');
    var modelType = (tEle.attr('fc-model-type') || '').toLowerCase();

    if(modelType === 'array') {
      tplClear.attr('ng-click', model + '=[]');
      tplClear.attr('ng-show', model + '.length > 0');
    } else {
      tplClear.attr('ng-click', model + '=""');
      tplClear.attr('ng-show', model);
    }
    

    var tplEle = tEle.clone();
    var contentClass = tplEle.attr('fc-class') || '';
    var iconClass = tplEle.attr('fc-icon-class') || '';
    var flex = tplEle.attr('flex') || '';
    tplEle.removeAttr('flex');
    tplEle.removeAttr('fcclear');
    tplEle.removeAttr('fc-class');
    tplEle.removeAttr('fc-icon-class');

    tplDiv.append(tplEle);
    tplDiv.append(tplClear);

    flex && tplDiv.attr('flex', flex);
    contentClass && tplDiv.addClass(contentClass);
    iconClass && tplDiv.find('ng-md-icon').addClass(iconClass);

    tEle.after(tplDiv);

    return function(scope, ele, attrs) {
      ele.remove();
    };
  }

})();
