// Quilon Mobiles JavaScript Document

$(window).on("load", function () {
    $("#QLMob_lodin1").delay(1800).fadeOut();
	$("#QLMob_bdy header, #QLMob_bdy main, #QLMob_bdy footer").css("visibility", "visible");
});

//Google map function
//function QMob_map(obj1, icon_im, zm, lat, lng) {
//	var QMob_pnt = new google.maps.LatLng(lat, lng);
//	var mapProp = {
//		center: QMob_pnt,
//		zoom: zm,
//		disableDefaultUI: true,
//		gestureHandling: 'cooperative',
//		scrollwheel: false,
//		scaleControl: true,
//		zoomControl: true,
//		zoomControlOptions: {
//			position: google.maps.ControlPosition.RIGHT_BOTTOM
//		},
//		mapTypeControl: true,
//		mapTypeControlOptions: {
//			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
//			position: google.maps.ControlPosition.RIGHT_BOTTOM
//		},
//		mapTypeId: google.maps.MapTypeId.ROADMAP
//	}
//	var QMob_mp = new google.maps.Marker({
//		position: QMob_pnt,
//		icon: icon_im
//	});
//	var map = new google.maps.Map(document.getElementById(obj1), mapProp);
//	QMob_mp.setMap(map);
//}

$(function () {
	//carousel
	/*$.getScript("js/bootstrap-swipe-carousel.min.js", function() {
		const QLMob_carousel = $('.carousel');
		// Bootstrap carousel needs to be loaded first
		QLMob_carousel.carousel().swipeCarousel({
		  sensitivity: 'high' // low, medium or high
		});
	});
    $('#carousel-indicators li, [class*="carousel-control-"]').click(function(){
		$("#QLMob_carousel1").carousel("pause");
	});*/
    $.getScript("js/pgwslideshow.min.js", function(){
        var slide = $('.pgwSlideshow').pgwSlideshow();
        $('.pgwSlideshow .ps-list li .ps-item').each(function(){
           var imgsrc = $(this).children("img").attr("src");
			var getsrc = 'background-image: url("'+ imgsrc +'")';
			$(this).attr("style", getsrc);
        });
		$('.pgwSlideshow').hover(function(){
			slide.stopSlide();
		});
	});
	//Time of Opening and Closing
	var d = new Date();
	var weekday = d.getDay();
	var hour = d.getHours();
	var minute = d.getMinutes();
	if (weekday == 7) {
		$("#toggle_open_close_today").html("Closed")
		$("#toggle_time_today").html(hour + ":" + minute);
	} else {
		if (hour < 10 || hour > 18) {
			$("#toggle_open_close_today").html("Closed")
			$("#toggle_time_today").html(hour + ":" + minute);
		} else {
			$("#toggle_open_close_today").html("Open");
			$("#toggle_time_today").html("10:am to 7:00pm");
		}
	}
	//contact form
	$.getScript("js/jquery.validate.min.js", function(){
		$("#QLMob_Contact_form").validate({
			rules: {
				name1: "required",
				email1: {
					required: true,
					email: true
				},
				msg1: {
					required: true
				}
			},
			messages: {
				name1: "Please specify your name",
				email1: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of username@domain.com"
				},
				msg1: "Please include your messages"
			},
			errorElement: "em",
			errorPlacement: function (error, element) {
				// Add the `invalid-feedback` class to the error element
				error.addClass("invalid-feedback");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.next("label"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).addClass("is-invalid").removeClass("is-valid");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).addClass("is-valid").removeClass("is-invalid");
			}

		});
	});
//	QMob_map('QLMob_Gmap_2', 'images/mapicon.png', 18, '8.883395', '76.591068');

	$(window).resize(function () {})
});

