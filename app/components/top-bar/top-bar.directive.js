(function(){
    'use strict';

    angular
    .module('fjs.components')
    .directive('top-bar',topBar);

    function topBar(){
      var definition = {
        restrict: 'E',
        templateUrl: 'app/components/top-bar/top-bar.html',
        scope:{},
        controller: topBarController,
        controllerAs: vm
      }
    }

    function topBarController(){
      var vm = this;
    }
})();
