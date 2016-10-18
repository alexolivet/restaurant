$(document).ready(function(){

	var header = $('body');

	var backgrounds = ['url(images/img-7.jpg)', 'url(images/img-8.jpg)', 'url(images/img-9.jpg)',
	    'url(images/img-10.jpg)', 'url(images/img-11.jpg)'];
	    
	var current = 0;

	function nextBackground() {
	    current++;
	    current = current % backgrounds.length;
	    header.css('background-image', backgrounds[current]);
	}
	setInterval(nextBackground, 3000);

	header.css('background-image', backgrounds[0]);
	
	if ($(window).width() < 1024) {
		var backgrounds = ['url(images/img-12.jpg)'];
		function nextBackground() {
	    current++;
	    current = current % backgrounds.length;
	    header.css('background-image', backgrounds);
	}
	nextBackground();

	header.css('background-image', backgrounds);
	}
});






