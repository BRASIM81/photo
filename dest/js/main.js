window.onload=function(){"0"!=document.cookie.length&&"yes"==document.cookie.split("=")[1]&&$("#cookies").css({opacity:"0",transform:"translate(0,100%)"})},(new WOW).init(),$(document).ready(function(){var o=(new Date).getFullYear();document.getElementById("copy").innerHTML="Simon Brain "+o,$("#cookie").on("click",function(o){document.cookie="cookieacpt=yes;max-age=2592000; path=/",o.preventDefault(),$("#cookies").css({opacity:"0",transform:"translate(0,100%)"})})});