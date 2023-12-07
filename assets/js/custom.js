(function ($) {
	"use strict";

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

	// --------------- functions ---------------

	// show/hide the "about person" navigation buttons, if the entire page is already visible
	function show_hide_person_nav(){
		var nav = $("#person-buttons");
		var hasVScroll = $(document).height() > $(window).height();
		if(hasVScroll){
			nav.fadeIn(200);
		}
		else {
			nav.fadeOut(200);
		}
	}

	//is an element visible?
	function visible(partial) {
        var $t = partial,
            $w = jQuery(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = (($t && $t.offset && $t.offset() && $t.offset().top) ? $t.offset().top : 0),
            _bottom = _top + (($t && $t.height && $t.height()) ? $t.height() : 0),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
    }

	// ---------------/functions ---------------

	// --------------- events ---------------

	//check the status of the vertical scroll on window resize
	$(window).on('resize', function(){
		show_hide_person_nav();
	});

	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	// onload
	$(document).ready(function () {
		
		//check the status of the vertical scroll on page load
		show_hide_person_nav();
		
	    $(document).on("scroll", onScroll);
	    /*
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"], a.scroll-to-section[href^="#"]').on('click', function (e) {
	        var menuheight = 80; //$("#main-menu").height();
			var subheaderheight = 0;
			if($(".subheader").length > 0)
			{
			  subheaderheight = $($(".subheader")[0]).height();
			}

			console.log("scrolling to. subheader height: " + subheaderheight)
	        e.preventDefault();
	        $(document).off("scroll");
	        //$('.scroll-to-section a').each(function () {
	        //    $(this).removeClass('active');
	        //})
	        //$(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target_element = $(this.hash);
			var scroll_to = target_element.offset().top + 5 - (menuheight + subheaderheight);

			console.log("Scrolling to " + target + " at " + scroll_to + " (menu height: " + menuheight + ", sub height: " + subheaderheight + ", elm top offset: " + target_element.offset().top + ")");
			window.location.hash = target;
			window.scrollTo({top: scroll_to, behavior: "smooth"});
	    });
		*/
	});

	// scroll event
	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
			if(currLink.attr("href") && currLink.attr("href") != "#" && currLink.attr("href").startsWith("#")){
				var refElement = $(currLink.attr("href"));
				if(refElement && refElement.position && refElement.position() && refElement.position().top && refElement.height && refElement.height())
				{
					//if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					//	$('.nav ul li a').removeClass("active");
					//	currLink.addClass("active");
					//}
					//else{
					//	currLink.removeClass("active");
					//}
				}
			}
	    });
	}

	$(window).scroll(function(e) {

		var scrollPos = $(document).scrollTop();
		var scrolled_to_the_bottom = ((window.innerHeight + (window.scrollY/10)) >= document.body.offsetHeight);

        if (visible($('.count-digit'))) {
            if ($('.count-digit').hasClass('counter-loaded')) return;
            $('.count-digit').addClass('counter-loaded');

            $('.count-digit').each(function() {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }

		//---------------------------
		/*
		//highlight the subheader links as the page gets scrolled through
		//https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62
		const sections = $("section");
		const navLi = $(".section-item.scroll-to-section");
        var menuheight = 80;
        var subheaderheight = 0;
        if($(".subheader").length > 0)
        {
          subheaderheight = $($(".subheader")[0]).height();
        }

		var current = "";
	
		sections.each((section_index) => {
			const sectionTop = sections[section_index].offsetTop;
			if (scrollY >= sectionTop - (menuheight + subheaderheight)) {
				current = sections[section_index].getAttribute("id"); 
			}
		});

		//on "about person" page, highlight the correct section
		navLi.each((li_index) => {
			var item = $(navLi[li_index]);
			var href = item.find("a")[0].getAttribute("href");

			if(href && href.indexOf("#") >= 0)
				href = href.substring(href.indexOf("#") + 1);

				navLi[li_index].classList.remove("active-section-item");
			if(scrolled_to_the_bottom)
			{
				if(li_index == navLi.length -1)
				{
					navLi[li_index].classList.add("active-section-item");
				}
			}
			else
			{
				if (current==href) {
					navLi[li_index].classList.add("active-section-item");
				}
			}
		});
		*/
		//---------------------------

		//show/hide the subheaders, if existing	  
		var box = $('.header-text').height();
		var gobackup = $("#scrollup");
		var header = $('header').height();
		var subheader = $(".subheader");

		if (scrollPos >= header) {
			$("header").addClass("background-header");
			gobackup.fadeIn(500);
			//subheader.fadeIn(200);
			console.log("SHOWING....")
			subheader.css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},200);
		} else {
			$("header").removeClass("background-header");
			gobackup.fadeOut(500);
			//subheader.fadeOut(200);
			console.log("HIDING....");
			subheader.css("visibility","hidden");
			/*
			subheader.animate({opacity: 0.0}, 200, function(){
				subheader.css("visibility","hidden");
			});*/
		}

		// add/remove "active" class to all relevant links
	    $('.nav a').each(function () {
	        var currLink = $(this);
			var href = currLink.attr("href");
			// Don't activate invalid links
			if(href && href != "#" && href.startsWith("#"))
			{
				var refElement = $(href);
				if(refElement && refElement.position && refElement.position() && refElement.position().top && refElement.height && refElement.height())
				{
					//if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					//	$('.nav ul li a').removeClass("active");
					//	currLink.addClass("active");
					//}
					//else{
					//	currLink.removeClass("active");
					//}
				}
			}
	    });
		
      // for scrolling to the right place when clicked
      var offset = 110;
        $('.scroll-to-section, #person-fixed-bar a, #person-buttons a').click(function(event) {
            event.preventDefault();
            var elm = $($(this).attr('href'))[0];
            var elementPosition = elm.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });            
        });		
    }); //end scroll event handler

	$("#scrollup, #person-subheader-pic, #person-subheader-name").on("click", function(){
		window.scrollTo({top: 0, behavior: "smooth"});
		window.location.hash="";
	});

	// Click scroll to menu items click
	/*
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
        var menuheight = 80;
        var subheaderheight = 0;
        if($(".subheader").length > 0)
        {
          subheaderheight = $($(".subheader")[0]).height();
        }
		console.log("scrolllllll " + subheaderheight)

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - (menuheight + subheaderheight)
				}, 700);
				return false;
			}
		}
	});	
	*/
	// end scroll event

	// ---------------/events ---------------

	// --------------- special item setup ---------------
	/*
	// accordion behaviour
	const Accordion = {
		settings: {
		  // Expand the first item by default
		  first_expanded: false,
		  // Allow items to be toggled independently
		  toggle: false
		},
  
		openAccordion: function(toggle, content) {
		  if (content.children.length) {
			toggle.classList.add("is-open");
			let final_height = Math.floor(content.children[0].offsetHeight);
			content.style.height = final_height + "px";
		  }
		},
  
		closeAccordion: function(toggle, content) {
		  toggle.classList.remove("is-open");
		  content.style.height = 0;
		},
  
		init: function(el) {
		  const _this = this;
  
		  // Override default settings with classes
		  let is_first_expanded = _this.settings.first_expanded;
		  if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
		  let is_toggle = _this.settings.toggle;
		  if (el.classList.contains("is-toggle")) is_toggle = true;
  
		  // Loop through the accordion's sections and set up the click behavior
		  const sections = el.getElementsByClassName("accordion");
		  const all_toggles = el.getElementsByClassName("accordion-head");
		  const all_contents = el.getElementsByClassName("accordion-body");
		  for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const toggle = all_toggles[i];
			const content = all_contents[i];
  
			// Click behavior
			toggle.addEventListener("click", function(e) {
			  if (!is_toggle) {
				// Hide all content areas first
				for (let a = 0; a < all_contents.length; a++) {
				  _this.closeAccordion(all_toggles[a], all_contents[a]);
				}
  
				// Expand the clicked item
				_this.openAccordion(toggle, content);
			  } else {
				// Toggle the clicked item
				if (toggle.classList.contains("is-open")) {
				  _this.closeAccordion(toggle, content);
				} else {
				  _this.openAccordion(toggle, content);
				}
			  }
			});
  
			// Expand the first item
			if (i === 0 && is_first_expanded) {
			  _this.openAccordion(toggle, content);
			}
		  }
		}
	  };

	  (function() {
		// Initiate all instances on the page
		const accordions = document.getElementsByClassName("accordions");
		for (let i = 0; i < accordions.length; i++) {
		  Accordion.init(accordions[i]);
		}
	  })();	  
	  // end accordion behaviour

	// click on filters (TODO: what's this?)
	$('.filters ul li').click(function(){
		//$('.filters ul li').removeClass('active');
		//$(this).addClass('active');
		
		var data = $(this).attr('data-filter');
		if($grid.isotope){
			$grid.isotope({
				filter: data
			});
		}
	});

	// grid isotope setup (TODO: what's this?)
	if($(".grid").isotope)
	{
		var $grid = $(".grid").isotope({
			itemSelector: ".all",
			percentPosition: true,
			masonry: {
				columnWidth: ".all"
			}
		});
	}

	*/
	// --------------- end special item setup ---------------

	// --------------- Main menu behaviour ---------------
	/*
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			//console.log("MENU!!")
			//$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}
	
    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);
            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }
                e.preventDefault();
            });
        });
    }
	*/
	// --------------- end Main menu behaviour ---------------

})(window.jQuery);