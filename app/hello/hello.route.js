(function(){
    'use strict';
    
    angular
    .module('fjs.hello')
    .config(helloRouting);
    
    helloRouting.$inject = ['$routeProvider'];
    
    function helloRouting($routeProvider) {
        $routeProvider.when('/', {
           controller: 'HelloController',
           controllerAs: 'vm',
           templateUrl: 'app/hello/hello.html'
        });
    }
    
})();