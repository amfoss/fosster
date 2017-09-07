/** *************Init JS*********************

    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Subscribe JS
	4.Full height function
	5.Resize function

	Pogody function

	6.Counter JS
	7.About Owl JS
	8.Team Owl JS
	9.Typed js
	10.Typed js for title tag
	11.click function
	12.clone function

	notifyForm function
	animateStart function
	animateFinish function
	placeholder ie9
 ** ***************************************/
 "use strict";


/*****Ready function start*****/
$(document).ready(function(){
  notifyForm();
  pogody();
  $('.la-anim-1').addClass('la-animate');
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	animateStart();
	$(".preloader-it").delay(800).fadeOut("slow");
	$("body").css('overflow-y','visible');
});
/*****Load function* end*****/


/***** Subscribe JS start *****/
$("#notifyMe").notifyMe();
/***** Subscribe JS end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	$('.full-height').css('min-height', (height));
};
/***** Full height function end *****/

/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
}).resize();
/***** Resize function end *****/

/***** Pogody function start *****/
function pogody(){
	/*Counter JS*/
	$('#countdown').countdown({
		date: '8/24/2017',
	});
	/*About Owl JS*/
	$('.qualities').owlCarousel({
    loop:true,
	autoplay:true,
	nav:false,
	dots:true,
	smartSpeed: 1500,
    margin:30,
	items:3,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
		1000:{
            items:3,
            nav:true
        }
    }
	});
	/*Team Owl JS*/
	$('.team').owlCarousel({
    loop:true,
	autoplay:true,
	nav:false,
	dots:true,
	smartSpeed: 1500,
    margin:30,
	items:1,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
		1000:{
            items:2,
            nav:true
        }
    }
	});
	/*Typed js*/
	$("#typed").typed({
		strings: [" Coming Soon", " Stay Tuned", " Almost There!"],
		typeSpeed: 100,
		backDelay: 900,
		loop: true,
		cursorChar: "|",
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false
	});
	/*Typed js for title tag*/
	$("#title").typed({
		strings: ["Seek..!", "Share..!", "Elevate..!"],
		typeSpeed: 300,
		backDelay: 900,
		loop: true,
		cursorChar: "|",
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false
	});

	/*click function*/
	var target = $('#splitlayout');
	$(".about").on('click', function(){
		if ( target.hasClass('reset-layout') ) {
			target.removeClass('close-right');
			target.addClass('open-left');
			target.removeClass('close-left');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
			function() {
				target.removeClass('reset-layout')
			});
		 }
		else if ( target.hasClass('open-left') ) {
			target.removeClass('reset-layout');
			target.removeClass('open-left');
			target.addClass('close-left');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
			function() {
				target.addClass('reset-layout')
			});
		}
		$('.side-left .call-to-action.about .fa-times').toggleClass('opacity-hide');
		$('.call-to-action .fa-info').toggleClass('opacity-hide');
	});

	$(".contact").on('click', function(){
		if ( target.hasClass('reset-layout') ) {
			target.addClass('open-right');
			target.removeClass('close-right');
			target.removeClass('close-left');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
			function() {
				target.removeClass('reset-layout')
			});
		 }
		else if ( target.hasClass('open-right') ) {
			target.removeClass('reset-layout');
			target.removeClass('open-right');
			target.addClass('close-right');
			target.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
			function() {
				target.addClass('reset-layout')
			});
		}
		$('.call-to-action .fa-envelope').toggleClass('opacity-hide');
		$('.side-right .call-to-action .fa-times').toggleClass('opacity-hide');
	});
	/*clone function*/
	$('.copyright').clone().appendTo('.address-detail');

/*input box animation*/
if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}

	[].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
		// in case the input is already filled..
		if( inputEl.value.trim() !== '' ) {
			classie.add( inputEl.parentNode, 'input--filled' );
		}

		// events:
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );

	function onInputFocus( ev ) {
		classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
		if( ev.target.value.trim() === '' ) {
			classie.remove( ev.target.parentNode, 'input--filled' );
		}
	}
}
/***** Pogody function end *****/

/***** notifyForm function start *****/
function notifyForm(){
  var menu   = $('.main-menu'),
			link   = $('.main-menu a, .go-section'),
			url    = window.location.href,
			hash   = url.substring(url.indexOf('#')),
			homeId = 'home';

  link.on('click', function(e){
		var $this    = $(this),
				id       = $this.attr('href').split('#').pop(),
				duration = 1;

		e.preventDefault();

		if (!$('#' + id).length) {
			console.log('No such section!');
			return false;
		}

		link.removeClass('active');

		animateFinish();

		$('.section.active [data-out-animation]').each(function(){
			var $this = $(this);

			if ($this.data('outAnimationDelay')){
				if ($this.data('outAnimationDelay') >= duration) {
					duration = $this.data('outAnimationDelay');
				}
			}
		});

		if (!$this.hasClass('open')) {
			link.removeClass('open');

			menu.find('[href="#'+ id +'"]').addClass('active').addClass('open');

			$('body').find('.preloader').delay(duration + 500).fadeIn(400, function() {
				$('.section').removeClass('active');

				$('#' + id).addClass('active');

				$(this).fadeOut(400);

				setTimeout(function(){

					animateStart();
				}, 0);

				//document.location.hash = '#' + id;
			});
		} else {
			$('body').find('.preloader').delay(duration + 500).fadeIn(400, function() {
				link.removeClass('open');

				$('.section').removeClass('active');

				$('#' + homeId).addClass('active');

				$(this).fadeOut(400);

				setTimeout(function(){
					//contentScroll();
					animateStart();
				}, 0);

				//document.location.hash = '#' + homeId;
			});
		}
  });

  $('[href="'+ hash +'"]').trigger('click');
}
/***** notifyForm function end *****/

/***** animateStart function start *****/
function animateStart(){
  var activeSection = $('.section.active');

  $('[data-animation]').each(function(){
		var $this     = $(this),
				animation = 'fadeIn',
				delay     = 1;

		if ($this.data('animation')){
			animation = $this.data('animation');
		}

		if ($this.data('animationDelay')){
			delay = $this.data('animationDelay');
		}

		if ($this.closest('.section').hasClass('active')){
			$this.css('animation-delay', delay + 'ms').addClass('animated').addClass(animation);
		}
  });
}
/***** animateStart function end *****/

/***** animateFinish function start *****/
function animateFinish(){
  var activeSection = $('.section.active'),
			duration      = 1;

  $('[data-out-animation]').each(function(){
		var $this        = $(this),
				animation    = 'fadeIn',
				outAnimation = 'fadeOut',
				delay        = 1,
				outDelay     = 1;

		if ($this.data('animation')){
			animation = $this.data('animation');
		}

		if ($this.data('outAnimation')){
			outAnimation = $this.data('outAnimation');
		}

		if ($this.data('animationDelay')){
			delay = $this.data('animationDelay');
		}

		if ($this.data('outAnimationDelay')){
			outDelay = $this.data('outAnimationDelay');
		}

		$this.css('animation-delay', delay + 'ms');


		if ($this.closest('.section').hasClass('active')){
			if (outDelay >= duration) {
				duration = outDelay;
			}

			$this.removeClass(animation).addClass(outAnimation);

			if ($this.data('outAnimationDelay')){
				$this.css('animation-delay', outDelay + 'ms');
			} else {
				$this.css('animation-delay', '1ms');
			}
		} else {
			$this.removeClass(animation).removeClass(outAnimation).removeAttr('style', 'animation-delay');
		}
  });
}
/***** animateFinish function end *****/


/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/
