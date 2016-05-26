//
// G-MAPS
// --------------------------------------------------
      var markers = [];
      
      function initialize() {
        var location = {lat: -34.863819, lng: -58.503281};
        var mapOptions = {
          center: new google.maps.LatLng(location.lat, location.lng),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADTYPE,
          panControl: false,
          draggable: false,
          zoomControl: true,
          scrollwheel: false,
          scaleControl: false,
          navigationControl: false,
          mapTypeControl: false,
          streetViewControl: true
        };
        map = new google.maps.Map(document.getElementById("mapCanvas"),mapOptions);

        var image = 'img/logo-marker.png';

        setTimeout(function(){
          markers.push(new google.maps.Marker({
            position: location,
            map: map,
            title: 'Hello World!',
            icon: image,
            animation: google.maps.Animation.DROP
          }));
        }, 1000);

      }
      // google.maps.event.addDomListener(window, "load", initialize);