function myMap(){var e=new google.maps.LatLng(52.102016,-1.922703),o={center:e,zoom:16,mapTypeId:google.maps.MapTypeId.HYBRID},o=new google.maps.Map(document.getElementById("googleMap"),o);new google.maps.Marker({position:e}).setMap(o)}window.onload=function(){"0"!=document.cookie.length&&"yes"==document.cookie.split(";").map(e=>e.split("=")).reduce((e,[o,n])=>({...e,[o.trim()]:decodeURIComponent(n)}),{}).cookieacpt&&$("#cookies").css({opacity:"0",transform:"translate(0,100%)"})},(new WOW).init(),$(document).ready(function(){var e=(new Date).getFullYear();document.getElementById("copy").innerHTML="Simon Brain "+e,$("#cookie").on("click",function(e){document.cookie="cookieacpt=yes;max-age=2592000; path=/",e.preventDefault(),$("#cookies").css({opacity:"0",transform:"translate(0,100%)"})})});