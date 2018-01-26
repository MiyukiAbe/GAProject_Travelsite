$(document).ready(function(){

// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 13,
//           center: {lat: 47.501510, lng: 19.045905}
          
//         });

//         setMarkers(map);
//       }

//       // Data for the markers consisting of a name, a LatLng and a zIndex for the
//       // order in which these markers should display on top of each other.
//       var sightseeingPlaces = [
//         ["st. Stephen's Basilica", 47.501356, 19.054162, 4],
//         ["Hungarian Parliament Building", 47.507205, 19.046309, 5],
//         ["Fisherman's Bastion", 47.502722, 19.035578, 3],
//         ["Buda Castle", 47.496699, 19.041043, 2],
//         ["Liberty Statue", 47.486681, 19.048325, 1]
//       ];

//       function setMarkers(map) {
//         // Adds markers to the map.

//         // Marker sizes are expressed as a Size of X,Y where the origin of the image
//         // (0,0) is located in the top left of the image.

//         // Origins, anchor positions and coordinates of the marker increase in the X
//         // direction to the right and in the Y direction down.
//         var image = {
//           url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//           // This marker is 20 pixels wide by 32 pixels high.
//           size: new google.maps.Size(20, 32),
//           // The origin for this image is (0, 0).
//           origin: new google.maps.Point(0, 0),
//           // The anchor for this image is the base of the flagpole at (0, 32).
//           anchor: new google.maps.Point(0, 32)
//         };
//         // Shapes define the clickable region of the icon. The type defines an HTML
//         // <area> element 'poly' which traces out a polygon as a series of X,Y points.
//         // The final coordinate closes the poly by connecting to the first coordinate.
//         var shape = {
//           coords: [1, 1, 1, 20, 18, 20, 18, 1],
//           type: 'poly'
//         };
//         for (var i = 0; i < sightseeingPlaces.length; i++) {
//           var sightseeingPlace = sightseeingPlaces[i];
//           var marker = new google.maps.Marker({
//             position: {lat: sightseeingPlace[1], lng: sightseeingPlace[2]},
//             map: map,
//             icon: image,
//             shape: shape,
//             title: sightseeingPlace[0],
//             zIndex: sightseeingPlace[3],
//           });
//         }
//       }

//   function initMap() {
	
// 	var broadway = {
// 		info: '<strong>Chipotle on Broadway</strong><br>\
// 					5224 N Broadway St<br> Chicago, IL 60640<br>\
// 					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
// 		lat: 41.976816,
// 		long: -87.659916
// 	};

// 	var belmont = {
// 		info: '<strong>Chipotle on Belmont</strong><br>\
// 					1025 W Belmont Ave<br> Chicago, IL 60657<br>\
// 					<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
// 		lat: 41.939670,
// 		long: -87.655167
// 	};

// 	var sheridan = {
// 		info: '<strong>Chipotle on Sheridan</strong><br>\r\
// 					6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
// 					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
// 		lat: 42.002707,
// 		long: -87.661236
// 	};

// 	var locations = [
//       [broadway.info, broadway.lat, broadway.long, 0],
//       [belmont.info, belmont.lat, belmont.long, 1],
//       [sheridan.info, sheridan.lat, sheridan.long, 2],
//     ];

// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 13,
// 		center: new google.maps.LatLng(41.976816, -87.659916),
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	});

// 	var infowindow = new google.maps.InfoWindow({});

// 	var marker, i;

// 	for (i = 0; i < locations.length; i++) {
// 		marker = new google.maps.Marker({
// 			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
// 			map: map
// 		});

// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				infowindow.setContent(locations[i][0]);
// 				infowindow.open(map, marker);
// 			}
// 		})(marker, i));
// 	}
// }


  });