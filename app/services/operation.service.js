(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('operation', operation);

    function operation(){
        return {add: function(op1, op2){
                return op1+op2;
            }
        }
    }
    

    
})();