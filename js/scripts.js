jQuery(document).ready(function($) {
	
	$('.carousel').carousel();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	

	// Change state of nav bar
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 50 ){
            $("nav").addClass('sticky');
        } else {
        	$("nav").removeClass('sticky');
        }
	});

	// Side nav inititalization
	$(".button-collapse").sideNav();


    // Initializing Materialize Scroll-spy
    $(".scrollspy").scrollSpy();


	var options = [
		{selector: '.scrollspy', offset: 200, callback: scrollFireCallback},
	];
	Materialize.scrollFire(options);

	function scrollFireCallback(){
		console.log('HUEHUEHEUH')
	}

});