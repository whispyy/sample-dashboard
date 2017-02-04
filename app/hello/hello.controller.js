(function(){
    'use strict';
    
    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);
    
    helloController.$inject = ['data'];
    function helloController(data,$scope) {

        // Initialize collapse button
        $(".sideJF").sideNav();
        var vm = this;
        
        
        //retrieve data
       	vm.data = data.getAll();
        console.log(vm.data.length);

        //Initialize map
        var mymap = L.map('mapid').setView([48.866667, 2.333333], 4);

        // var mylayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'your.mapbox.project.id',
        //     accessToken: 'pk.eyJ1Ijoid2hpc3B5eSIsImEiOiJjaXlyNmtjMDYwMDFzMzNwNHRsMTN1YnRhIn0.QDvwTdIxpfc1m99IIlKdwg'
        //     }).addTo(mymap);
        vm.data.forEach(function(e){
          var marker = L.marker([e.location.lat, e.location.long]).addTo(mymap);
          var popup = L.popup()
                .setLatLng([e.location.lat, e.location.long])
                .setContent(e.comment)
                .addTo(mymap);
        })
        //var marker = L.marker([51.5, -0.09]).addTo(mymap);
        
    }
    
})();