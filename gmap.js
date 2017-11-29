function initMap() {
  var hbf = {lat: 41.942656, lng: -87.702814};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: hbf
  });
  var marker = new google.maps.Marker({
    position: hbf,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: 'HBF-Icon.png'
  });
  var info = "<h1>Honey Butter Fried Chicken</h1><p>In an origin story that's somehow better than Wolverine's, the folks behind Sunday Dinner Club happened upon a marvelous recipe when, at a supper six years ago, a tray of honey-buttered corn cakes happened to spill over on a plate of fried chicken. Now the happy accident is the namesake of their new brick 'n mortar restaurant representing possibly the four most beautiful words in the English language: Honey Butter Fried Chicken.</p>";

	var infobox = new google.maps.InfoWindow({
      content: info
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infobox.open(map, marker);
  	});
}