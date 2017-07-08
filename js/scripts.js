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
	$(".button-collapse").sideNav({
		closeOnClick: true,
	});


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

// function countDownTimer(){

// 	var event_date = new Date(2018, 01, 23, 9, 00, 00);
// 	var curr_date = new Date();
// 	var t1 = event_date.getTime();
// 	var t2 = curr_date.getTime();
// 	var day = Math.floor((t1-t2)/(24*60*60*1000));
// 	t1 = t1 - day*24*60*60*1000;
// 	var hour = Math.floor((t1-t2)/(60*60*1000));
// 	t1 = t1 - hour*60*60*1000;
// 	var min = Math.floor((t1-t2)/(60*1000));
// 	t1 = t1 - min*60*1000;
// 	var sec = Math.floor((t1-t2)/(1000));

// 	document.getElementById('day').innerHTML = day;
// 	document.getElementById('hour').innerHTML = hour;
// 	document.getElementById('min').innerHTML = min;
// 	document.getElementById('sec').innerHTML = sec;

// 	setInterval(function(){
// 		countDownTimer();	
// 	}, 1000);

// 	// console.log(event_date + "\n" + curr_date + "\n" + diff);
// 	// console.log(day + "\n" + hour + "\n" + min + "\n" + sec);
// }

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

$(window).scroll(function() {
	var hT = $('#player').height(),
	wS = $(this).scrollTop();
	if (wS > hT) {
		player.pauseVideo();
	}
	else {
		player.playVideo();
	}
});