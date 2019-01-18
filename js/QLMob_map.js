// Quilon Mobiles JavaScript Document

function QLMob_mains(){
//	var brwdth = $("#QLMob_bdy").width();
//	var winht = $(window).height();
//	var hdrht = $("#QLMob_bdy header").height();
//	var reqht = winht-hdrht;
//	$("#QLMob_bdy .jumbotron").css("min-height", reqht + "px");
}

//Google map function
function QLMob_loc_map() {
	var QLMob_pnt = new google.maps.LatLng(8.8834008, 76.588879);
	var mapProp = {
		center: QLMob_pnt,
		zoom: 18,
		disableDefaultUI: true,
		gestureHandling: 'cooperative',
		scrollwheel: false,
		scaleControl: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var QLMob_loc = new google.maps.Marker({
		position: QLMob_pnt,
		icon: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNEFDQkZBREY5RTUxMUU4OUJGQTkwMDc4NjYxRkNENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNEFDQkZBRUY5RTUxMUU4OUJGQTkwMDc4NjYxRkNENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE0QUNCRkFCRjlFNTExRTg5QkZBOTAwNzg2NjFGQ0Q3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE0QUNCRkFDRjlFNTExRTg5QkZBOTAwNzg2NjFGQ0Q3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEB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'
	});
	var map = new google.maps.Map(document.getElementById("QLMob_googleMap"), mapProp);
	QLMob_loc.setMap(map);
}

$(function(){
    var d = new Date();
    var weekday = d.getDay();
    var hour = d.getHours();
    var minute = d.getMinutes();
    if(weekday==6 || weekday==7 || hour<10 || hour>19){
        $("#toggle_open_close_today").html("Closed")
        $("#toggle_time_today").html(hour + ":" + minute);
    }
    else{
        $("#toggle_open_close_today").html("Open");
        $("#toggle_time_today").html("10:am to 7:00pm");
    }
//    console.log(weekday, hour, minute);
    QLMob_loc_map();
	$(window).resize(function(){
//		$("#QLMob_bdy .jumbotron").css("min-height", "100%");
	})
});