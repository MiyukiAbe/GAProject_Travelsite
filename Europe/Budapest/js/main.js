$(document).ready(function(){



$("#map").on("click", "span", function() {
	$("#placeHolder").css("display","none");
	$("#showImage").show();
	$(".show").css("display", "none");
		if($(this).hasClass("location1") ){
			$(".location1").show();
	}	if($(this).hasClass("location2") ){
			$(".location2").show();
	}	if($(this).hasClass("location3") ){
			$(".location3").show();
	}	if($(this).hasClass("location4") ){
			$(".location4").show();
	}	if($(this).hasClass("location5") ){
			$(".location5").show();
	}	if($(this).hasClass("location6") ){
			$(".location6").show();
	}	
});




//When user click marker, 
//Hide .showImage
//if the marker has class "locaiton1"
//show .location1
//if the marker has class "location2"
//show .location2











  });