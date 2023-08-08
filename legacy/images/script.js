// (function($) {
// 	function common(){
// 		/* Declaration */
// 		var $header = $("header"),
// 			$menu = $header.find(".menu"),
// 			$profile = $header.find(".profile"),
// 			$search = $header.find(".search");

// 		/* window - Set Property - scrollY progress */
// 		$(window).on("scroll", function() {
// 			document.documentElement.style.setProperty('--scroll_ratio', window.scrollY / (document.body.scrollHeight - window.innerHeight));
// 		});

// 		/* window - Media Query */
// 		$.sidemenu = function () {
// 			($(window).width() > 1366) ? $("body").addClass("side-menu") : $("body").removeClass("side-menu");
// 		}
// 		$(document).ready($.sidemenu);
// 		$(window).resize($.sidemenu);

// 		/* #wrap header */
// 		$header.on("mouseleave", function() {
// 			$search.removeClass("on");
// 		});

// 		/* #wrap header .util .menu */
// 		$menu.on("click", function(){
// 			$("body").hasClass("side-menu") ? $("body").removeClass("side-menu") : $("body").addClass("side-menu");
// 		});

// 		/* #wrap header .util .profile */
// 		$profile.on("click", "button", function(){
// 			$(this).siblings("nav").is(":hidden") ? $(this).siblings("nav").show() : $(this).siblings("nav").hide();
// 		});
// 		$profile.on("mouseleave", function(){
// 			$(this).find("nav").hide();
// 		});
// 		$profile.on("click", ".login", function(){
// 			document.location.href = 'https://www.tistory.com/auth/login?redirectUrl=' + encodeURIComponent(window.TistoryBlog.url);
// 		});
// 		$profile.on("click", ".logout", function(){
// 			document.location.href = 'https://www.tistory.com/auth/logout?redirectUrl=' + encodeURIComponent(window.TistoryBlog.url);
// 		});
// 		if ( window.T && window.T.config.USER.name ){
// 			$profile.find(".login").hide();
// 			$profile.find(".logout").show();
// 		} 
// 		else {
// 			$profile.find(".login").show();
// 			$profile.find(".logout").hide();
// 		}

// 		/* #wrap header .util .search */
// 		$search.on("click", function(){
// 			if ( !$(this).hasClass("on") )
// 				$(this).addClass("on").find("input").focus();
// 		});

// 		/* #tool #page-top */
// 		$("#page-top").on('click', function(){
// 			$('body, html').animate({ scrollTop: 0 }, 500 );
// 		});

// 		/* keyup esc */
// 		$(document).on("keyup", function(e) {
// 			if (e.which == 27){
// 				$search.removeClass("on");
// 				$profile.find("nav").hide();
// 			}
// 		});
// 	}

// 	function commentControl(){
// 		$(document).on("click", ".comments .comment-list ul li .author-meta .control button", function(){
// 			if ( $(this).siblings(".link").is(":hidden") ){
// 				$(".comments .link").removeAttr("style");
// 				$(this).siblings(".link").show();
// 			} else {
// 				$(this).siblings(".link").hide();
// 			}
// 		});

// 		$(document).on("keyup", function(e){
// 			if ( e.keyCode == '27' ){
// 				$(".comment-list ul li .author-meta .control .link").removeAttr("style");
// 			}
// 		});
// 	}

// 	common(); commentControl(); // Execute
// })(jQuery);