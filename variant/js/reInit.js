function reInit(target){


	"use strict";
	
	// Nav Sticky
	
	$(window).scroll(function(){
		if($(window).scrollTop() > 500 && !$(target+' .mobile-toggle').is(":visible")){
			$(target+' .top-bar').addClass('nav-sticky');
		}else{
			$(target+' .top-bar').removeClass('nav-sticky');
		}
	});
	
	// Offscreen Nav
	
	$(target+' .offscreen-toggle').click(function(){
		$(target+' .main-container').toggleClass('reveal-nav');
		$(target+' .offscreen-container').toggleClass('reveal-nav');
		$(target+' .offscreen-menu .container').toggleClass('reveal-nav');
	});
	
	$(target+' .main-container').click(function(){
		if($(this).hasClass('reveal-nav')){
			$(target+' .main-container').toggleClass('reveal-nav');
			$(target+' .offscreen-container').toggleClass('reveal-nav');
			$(target+' .offscreen-menu .container').toggleClass('reveal-nav');
		}
	});
	
	// Detect logo dimensions and add correct class
	
	var logoImage = $(target+' .top-bar .logo:first-of-type');
	
	var theImage = new Image();
	theImage.src = logoImage.attr("src");
	
	var logoWidth = theImage.width;
	var logoHeight = theImage.height;
	var logoRatio = logoWidth / logoHeight;
	
	if(logoRatio > 2.8){
		$(target+' .top-bar .logo').addClass('logo-wide');
	}
	
	if(logoRatio < 2){
		$(target+' .top-bar .logo').addClass('logo-square');
	}
	
	// Smooth scroll
	
	$(target+' .inner-link').smoothScroll({offset: -96, speed: 800});
	
	// Mobile Toggle
	
	$(target+' .mobile-toggle').click(function(){
		$(target+' nav').toggleClass('open-nav');
	});
	
	// Fullscreen nav toggle
	
	$(target+' .fullscreen-nav-toggle').click(function(){
		if(!$(target+' .fullscreen-nav-container').hasClass('show-fullscreen-nav')){
			$(target+' .fullscreen-nav-container').addClass('show-fullscreen-nav');
			setTimeout(function(){
				$(target+' .fullscreen-nav-container').addClass('fade-fullscreen-nav');
			},100);
			$(this).addClass('toggle-icon');
		}else{
			$(this).removeClass('toggle-icon');
				$(target+' .fullscreen-nav-container').removeClass('fade-fullscreen-nav');
			setTimeout(function(){
				
				$(target+' .fullscreen-nav-container').removeClass('show-fullscreen-nav');
			},500);
		}
	});	
	
	$(target+' .fullscreen-nav-container .menu li a').click(function(){
		$(target+' .fullscreen-nav-toggle').removeClass('toggle-icon');
			$(target+' .fullscreen-nav-container').removeClass('fade-fullscreen-nav');
		setTimeout(function(){
			$(target+' .fullscreen-nav-container').removeClass('show-fullscreen-nav');
		},500);
	});
	
	// Margin first section for top bar
	
	if(!$(target+' nav').hasClass('overlay-bar') && !$(target+' nav').hasClass('contained-bar')){
		$(target+' .main-container').first().css('margin-top', $(target+' nav').outerHeight());
	}
	
	$(window).resize(function(){
		if(!$(target+' nav').hasClass('overlay-bar') && !$(target+' nav').hasClass('contained-bar')){
			$(target+' .main-container').first().css('margin-top', $(target+' nav').outerHeight());
		}
	});
	
	// Pad first section for overlay bar
	
	if($(target+' nav').hasClass('overlay-bar') || $(target+' nav').hasClass('contained-bar') ){
		var currentPad = parseInt($(target+' .main-container').find(':first-child').css('padding-top'));
		var newPad = currentPad + $(target+' nav').outerHeight() - 48;
		if(currentPad > 0){
			$(target+' .main-container').children(':first').css('padding-top', newPad);
		}else if($(target+' .main-container').find(':first').hasClass('hero-slider')){
			var height = parseInt($(target+' .hero-slider .slides li:first-child').outerHeight());
			var newHeight = height + $(target+' nav').outerHeight();
			$(target+' .hero-slider .slides li').css('height', newHeight);
		}
	}
	
	
	// Fullwidth Subnavs
	
	// Position Fullwidth Subnavs fullwidth correctly

    $(target+' .subnav-fullwidth').each(function () {
        $(this).css('width', $(target+' .container').width());
        var offset = $(this).closest('.has-dropdown').offset();
        offset = offset.left;
        var containerOffset = $(window).width() - $(target+' .container').outerWidth();
        containerOffset = containerOffset /2;
        offset = offset - containerOffset - 15;
        $(this).css('left', -offset);
    });

    $(window).resize(function () {
        $(target+' .subnav-fullwidth').each(function () {
            $(this).css('width', $(target+' .container').width());
			var offset = $(this).closest('.has-dropdown').offset();
			offset = offset.left;
			var containerOffset = $(window).width() - $(target+' .container').outerWidth();
			containerOffset = containerOffset /2;
			offset = offset - containerOffset - 15;
			$(this).css('left', -offset);
        });
    });

	
	// Scroll Reveal
	






	// Slider Initializations
	
	$(target+' .hero-slider').flexslider({});
	$(target+' .image-slider').flexslider({ animation: "slide"});
	$(target+' .testimonials-slider').flexslider({ directionNav: false });
	
	// Slide Sizes
	
	$(target+' .slider-fullscreen .slides li').each(function(){
		$(this).css('height', $(window).height());
	});
	
	$(target+' .fullscreen-element').each(function(){
		$(this).css('height', $(window).height());
	});


	// Feature Selector
	
	$(target+' .selector-tabs li').click(function(){
		$(this).parent('.selector-tabs').children('li').removeClass('active');
		$(this).addClass('active');
		
		var activeTab = $(this).index() + 1;
		
		$(this).closest('.feature-selector').find('.selector-content').children('li').removeClass('active');
		$(this).closest('.feature-selector').find('.selector-content').children('li:nth-child('+activeTab+')').addClass('active');
	});
	
	// Append .background-image-holder <img>'s as CSS backgrounds
	
	$(target+' .background-image-holder').each(function(){
		var imgSrc= $(this).children('img').attr('src');
		$(this).css('background', 'url("' + imgSrc + '")');
    	$(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
	});
	
	// Accordion
	
	$(target+' .accordion li').click(function(){
		$(this).parent('.accordion').children('li').removeClass('active');
		$(this).addClass('active');
	});
	
	/************** Parallax Scripts **************/

    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isChrome = !!window.chrome;
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var prefix;

    if (isFirefox) {
        prefix = '-moz-';
    } else if (isIE) {

    } else if (isChrome || isSafari) {
        prefix = '-webkit-';
    }

    $(target+' .main-container section:first-child').addClass('first-child');

    $(target+' .parallax-background').each(function () {

        if ($(this).closest('section').hasClass('first-child') && !$(this).closest('section').hasClass('slider-fullscreen')) {
            $(this).attr('data-top', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,200px, 0px)');

        } else {

            $(this).attr('data-bottom-top', prefix + 'transform: translate3d(0px,-100px, 0px)');
            $(this).attr('data-center', prefix + 'transform: translate3d(0px,0px, 0px)');
            $(this).attr('data-top-bottom', prefix + 'transform: translate3d(0px,100px, 0px)');

        }

    });
    
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
        
        // Multi Layer Parallax
    
		$(target+' .hover-background').each(function(){
			$(this).mousemove(function( event ) {
				$(this).find('.background-image-holder').css('transform', 'translate(' + -event.pageX /30 + 'px,' + -event.pageY /45+ 'px)');
				$(this).find('.layer-1').css('transform', 'translate(' + -event.pageX /50 + 'px,' + -event.pageY /50+ 'px)');
				$(this).find('.layer-2').css('transform', 'translate(' + -event.pageX /60 + 'px,' + -event.pageY /60+ 'px)');
			});
		});
    }
    
    // Map Holder Overlay
	
	$(target+' .map-holder').click(function(){
		$(this).addClass('on');
	});
	
	$(window).scroll(function(){
		if($(target+' .map-holder').hasClass('on')){
			$(target+' .map-holder').removeClass('on');
		}
	});
	
	// Map Details Holder
	
	$(target+' .details-holder').each(function(){
		$(this).css('height', $(this).width());
	});
	
	$(target+' .details-holder').mouseenter(function(){
		$(this).closest('.map-overlay').addClass('fade-overlay');
	}).mouseleave(function(){$(this).closest('.map-overlay').removeClass('fade-overlay');});
	
	// Countdown
	
	$(target+' .countdown').each(function(){
		$(this).countdown({until: new Date($(this).attr('data-date'))});
	});
	
	// Twitter Feed
	
	if($(target+' #tweets').length){
		twitterFetcher.fetch($(target+' #tweets').attr('data-widget-id'), '', 5, true, true, true, '', false, handleTweets);
      
    }
    
    // Contact form code

    $(target+' form.email-form').submit(function (e) {
		// return false so form submits through jQuery rather than reloading page.
		if(e.preventDefault) e.preventDefault(); 
		else e.returnValue = false;
		
		var thisForm 		= $(this).closest('.email-form'),
			error 			= 0,
			originalError 	= thisForm.attr('original-error'),
			loadingSpinner;
			
		if (typeof originalError !== typeof undefined && originalError !== false) {
			thisForm.find('.form-error').text(originalError); 
		}
				

		$(thisForm).find('.validate-required').each(function(){
			if($(this).val() === ''){
				$(this).addClass('field-error');
				error = 1;
			}else{
				$(this).removeClass('field-error');
			}
		});
		
		$(thisForm).find('.validate-email').each(function(){
			if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
				$(this).addClass('field-error');
				error = 1;
			}else{
				$(this).removeClass('field-error');
			}
		});
		

        if (error === 1){
            $(this).closest('.email-form').find('.form-error').fadeIn(200);
        }else {
			// Hide the error if one was shown
			$(this).closest('.email-form').find('.form-error').fadeOut(200);
			// Create a new loading spinner while hiding the submit button.
			loadingSpinner = $(target+' <div />').addClass('form-loading').insertAfter($(thisForm).find('input[type="submit"]'));
			$(thisForm).find('input[type="submit"]').hide();
            
            jQuery.ajax({
                type: "POST",
                url: "mail/mail.php",
                data: thisForm.serialize(),
                success: function (response) {
                	// Swiftmailer always sends back a number representing numner of emails sent.
					// If this is numeric (not Swift Mailer error text) AND greater than 0 then show success message.
					$(thisForm).find('.form-loading').remove();
					$(thisForm).find('input[type="submit"]').show();
					if($.isNumeric(response)){
						if(parseInt(response) > 0){
							thisForm.find('.form-success').fadeIn(1000);
							thisForm.find('.form-error').fadeOut(1000);
							setTimeout(function(){ thisForm.find('.form-success').fadeOut(500); }, 5000);
						}
					}
					// If error text was returned, put the text in the .form-error div and show it.
					else{
						// Keep the current error text in a data attribute on the form
						thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
						// Show the error with the returned error text.
						thisForm.find('.form-error').text(response).fadeIn(1000);
						thisForm.find('.form-success').fadeOut(1000);
					}
                },
                error: function (errorObject, errorText, errorHTTP) {
                	// Keep the current error text in a data attribute on the form
					thisForm.find('.form-error').attr('original-error', thisForm.find('.form-error').text());
					// Show the error with the returned error text.
					thisForm.find('.form-error').text(errorHTTP).fadeIn(1000);
					thisForm.find('.form-success').fadeOut(1000);
                	$(thisForm).find('.form-loading').remove();
					$(thisForm).find('input[type="submit"]').show();
                }
            });
        }
		return false;
    });
	
	
	// Expanding Lists (updated in Pivot 1.4.0)
	
	$(target+' .expanding-ul li').click(function(){
		$(target+' .expanding-ul li').removeClass('active');
		$(this).addClass('active');
	});





  "use strict";
  	
  
	// Align Elements Vertically
	
	alignVertical();
	alignBottom();
	
	$(window).resize(function(){
		alignVertical();
		alignBottom();
	});
	
	// Isotope Projects
	
	$(target+' .projects-container').isotope({
	  itemSelector: '.project',
	  layoutMode: 'fitRows'
	});
	
	$(target+' .filters li').click(function() {
	  var current = $(this);
	  
	  current.siblings('li').removeClass('active');
	  current.addClass('active');
	  
	  var filterValue = current.attr('data-filter');
	  var container = current.closest('.projects-wrapper').find('.projects-container');
	  container.isotope({ filter: filterValue });
	});
	
	// Isotope contained feature boxes
	
	$(target+' .contained-features-wrapper').isotope({
	  itemSelector: '.no-pad',
	  layoutMode: 'masonry',
	  masonry: {
		  gutter: 0
		}
	});
	
	// Instagram Feed
	
	if($(target+' .instafeed').length){
		jQuery.fn.spectragram.accessData = {
			accessToken: '1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b',
			clientID: 'fedaafacf224447e8aef74872d3820a1'
		};

		$(target+' .instafeed').each(function () {
			$(this).children('ul').spectragram('getUserFeed', {
				query: $(this).attr('data-user-name')
			});

		});
		
	}
	
    if($(target+' #tweets').length){
    	$(target+' #tweets').flexslider({ directionNav: false, controlNav: false });
    }
    
    // Remove Loader
    
    $(target+' .loader').css('opacity', 0);
    setTimeout(function(){$(target+' .loader').hide();}, 600);
    
	// Mailchimp/Campaign Monitor Mail List Form Scripts
	$(target+' form.mail-list-signup').on('submit', function(){
		
		var iFrame = $(this).closest('section, header').find('iframe.mail-list-form'),
		thisForm 		= $(this).closest('.mail-list-signup'),
		userEmail 		= $(this).find('.signup-email-field').val(),
		userFullName 	= $(this).find('.signup-name-field').val(),
		userFirstName 	= $(this).find('.signup-first-name-field').val(),
		userLastName 	= $(this).find('.signup-last-name-field').val(),
		error			= 0;
		
		$(thisForm).find('.validate-required').each(function(){
			if($(this).val() === ''){
				$(this).addClass('field-error');
				error = 1;
			}
			else{
				$(this).removeClass('field-error');
			}
		});
		
		$(thisForm).find('.validate-email').each(function(){
			if(!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))){
				$(this).addClass('field-error');
				error = 1;
			}
			else{
				$(this).removeClass('field-error');
			}
		});
		
		if(error === 0){
			iFrame.contents().find('#mce-EMAIL, #fieldEmail').val(userEmail);
			iFrame.contents().find('#mce-LNAME, #fieldLastName').val(userLastName);
			iFrame.contents().find('#mce-FNAME, #fieldFirstName').val(userFirstName);
			iFrame.contents().find('#mce-FNAME, #fieldName').val(userFullName);		
			iFrame.contents().find('form').attr('target', '_blank').submit();
		}
		return false;
	});
	
	// Blog Masonry
	
	$(target+' .blog-masonry-container').isotope({
	  itemSelector: '.blog-masonry-item',
	  layoutMode: 'masonry'
	});
	
	$(target+' .blog-filters li').click(function() {
	  var current = $(this);
	  
	  current.siblings('li').removeClass('active');
	  current.addClass('active');
	  
	  var filterValue = current.attr('data-filter');
	  var container = current.closest('.blog-masonry').find('.blog-masonry-container');
	  container.isotope({ filter: filterValue });
	});





function handleTweets(tweets){
          var x = tweets.length;
          var n = 0;
          var element = document.getElementById('tweets');
          var html = '<ul class="slides">';
          while(n < x) {
            html += '<li>' + tweets[n] + '</li>';
            n++;
          }
          html += '</ul>';
          element.innerHTML = html;
    }

function alignVertical(){

		$(target+' .align-vertical').each(function(){
			var that = $(this);
			var height = that.height();
			var parentHeight = that.parent().height();
			var padAmount = (parentHeight / 2) - (height/2);
			that.css('padding-top', padAmount);
		});
	
}

function alignBottom(){
	$(target+' .align-bottom').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight) - (height) - 32;
		that.css('padding-top', padAmount);
	});
}

// Youtube Background Handling



		$(target+' .youtube-bg-iframe').each(function(index){
			$(this).attr('id', 'yt-'+index);
			var player = new YT.Player($(this).attr('id'), {
				events: {
				'onReady': function(){
					player.mute();
					player.playVideo();
				},
				'onStateChange': function(newState){
					player.playVideo();
				}
			}
			});
		});

	


}