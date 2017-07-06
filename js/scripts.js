jQuery(document).ready(function($) {
	
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


    // Owl carousel inititalization for speakers list
    $(".speaker_list").owlCarousel({
		loop:false,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1200:{
				items:3
			}
		}
	})



	function resizeVideo() {

	    var vidRatio = 1.78;
		var wrapperHeight = $('.player_wrapper').height();
		var wrapperWidth = $('.player_wrapper').width();
		var wrapperRatio = wrapperWidth / wrapperHeight;
		if(wrapperRatio < vidRatio){
		    var newWidth  = wrapperWidth  * (vidRatio/wrapperRatio);
		    $('#player').css({'min-height':wrapperHeight+'px', 'min-width':newWidth+'px', 'position':'absolute', 'left':'50%','margin-left':'-'+(newWidth/2)+'px'});
		}
		else{
		    var newHeight  = wrapperHeight   * (wrapperRatio / vidRatio);
		    $('#player').css({'min-height':newHeight+'px', 'min-width':wrapperWidth+'px', 'position':'absolute', 'top':'50%','margin-top':'-'+(newHeight/2)+'px'});

		}
	}


	resizeVideo();
    $(window).on('resize', resizeVideo());

});


function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		playerVars: {
			'autoplay': 1,
			'loop': 1,
			'controls': 0,
			'autohide': 1,
			'showinfo': 0,
			'mute': 1,
			'modestbranding': 0,
			'playlist': 'rESBxsSdhnY'
		},
		videoId: 'rESBxsSdhnY',
		events: {
			'onReady': onPlayerReady
		}
	});

}

function onPlayerReady(event) {
	event.target.mute();
}