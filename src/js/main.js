window.onload = function(){
	if(document.cookie.length != '0'){
		var cookieVal = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acumulator, [key, value]) => ({
			...acumulator,
			[key.trim()]: decodeURIComponent(value)
		}), {});
		if(cookieVal.cookieacpt == "yes"){
			$("#cookies").css({
				'opacity':'0',
				'transform':'translate(0,100%)'
			});
		}
	}
};
new WOW().init();
$(document).ready(function(){
  var d = new Date();
	 var y = d.getFullYear();
	 document.getElementById('copy').innerHTML = "Simon Brain " + y;
	$("#cookie").on('click', function(e){
		document.cookie = "cookieacpt=yes;max-age=" + (60*60*24*30) + "; path=/";
		e.preventDefault();
		$("#cookies").css({
			'opacity':'0',
			'transform':'translate(0,100%)'
		});
	});
});
function myMap() {
	var myCenter = new google.maps.LatLng(52.102016, -1.922703);
	var mapProp = {
		center: myCenter,
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	var marker = new google.maps.Marker({
		position: myCenter,
	});
	marker.setMap(map);
}