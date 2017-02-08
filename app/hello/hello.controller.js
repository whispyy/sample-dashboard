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
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 12, attribution: osmAttrib});
        mymap.addLayer(osm);
        vm.data.forEach(function(e){
          var marker = L.marker([e.location.lat, e.location.long]).addTo(mymap);
          var popup = L.popup()
                .setLatLng([e.location.lat, e.location.long])
                .setContent(e.comment)
                .addTo(mymap);
        });

    }

})();
