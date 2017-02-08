(function(){
    'use strict';

    angular
    .module('fjs.components')
    .directive('nav-side', navSide);

    function navSide(){
      var definition = {
        restrict:'E',
        templateUrl: 'app/components/nav-side/nav-side.html',
        scope: {},
        controller: navSideController,
        controllerAs: 'vm'
      }
      return definition;
    }

    navSideController.$inject = ['$scope'];

    function navSideController($scope){
      var vm = this;
    }
})();
