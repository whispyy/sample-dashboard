(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('data', data);

    function data(){
        
        function getAll(){
            var json = [];
            var projectA = { 
                            title : "projectA", 
                            location : 
                                {
                                    lat : 50.633333, 
                                    long : 3.066667
                                },
                            comment : "Ville de Lille"
                            };
            var projectB = { 
                            title : "projectB", 
                            location : 
                                {
                                    lat : 48.866667, 
                                    long : 2.333333
                                },
                            comment : "Ville de Paris"
                            };
            var projectC = { 
                            title : "projectC", 
                            location : 
                                {
                                    lat : 43.3, 
                                    long : 5.4
                                },
                            comment : "Ville de Marseille"
                            };
            json.push(projectA);
            json.push(projectB);
            json.push(projectC);
            return json;
        }

        var services = {
            getAll:getAll
        }

        return services;
    }
    

    
})();