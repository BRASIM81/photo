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