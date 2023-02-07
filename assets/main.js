(function ($) {
	"use strict";

$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/*=============================================
	=    	    Testimonial Active            =
=============================================*/
  $('.blog__posts').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});
		
  $('.blog__postss').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	slidesToShow: 3,
	fade: true,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});
$('.testimonial-slider').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="../img/icon/pev_arrow.png" alt=""></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="../img/icon/next_arrow.png" alt=""></button>',
	slidesToShow: 1,
	fade: true,adaptiveHeight: true,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
});
$('.video-carousel-inner').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,dots: false,
  arrows: true,
	responsive: [
		{
			breakpoint: 749,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
	]
});  
   $( '.video-carousel-inner' ).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $("video").each(function(){
      this.pause();
    });
  });
  $(document).ready(function () {
        function playFile() {
            $(".ply_pause").not(this).each(function () {
                $(this).get(0).pause();
            });
            this[this.get(0).paused ? "play" : "pause"]();
        }

        $('.ply_pause').on("click play", function() {
            playFile.call(this);
        });
    })
/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

 /* magnificPopup video view */

// $('.popup-video').magnificPopup({
// 	type: 'iframe'
// });
      
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
  });      
      
      
      
})(jQuery);