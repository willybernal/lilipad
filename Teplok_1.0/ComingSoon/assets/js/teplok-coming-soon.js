$(document).ready(function() {
	/** COUNTDOWN SELECTOR **/
	$("#countdown").countdown({
		date: "8 September 2014 09:00:00", /** Change this to your desired date to countdown to **/
		format: "on"
	});
	
	/** TOOLTIP SELECTOR **/
	$('.tooltips').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	})
	
});
	
/** VEGAS SLIDESHOW IMAGES **/
$(function() {
	$.vegas('slideshow', {
	  backgrounds:[
		{ src:'images/image001.jpg', fade:1000, delay: 9000 },
		{ src:'images/image005.jpg', fade:1000, delay: 9000 },
		{ src:'images/image003.jpg', fade:1000, delay: 9000 },
		{ src:'images/image004.jpg', fade:1000, delay: 9000 }
	  ]
	})('overlay', {
	  /** SLIDESHOW OVERLAY **/
	  src:'assets/third/vegas/overlays/02.png'
	});
});