$(document).ready(function(){





$("#map").on("click", "span", switchingPictures);
$(".pictureChange").on("click", switchingPictures);

function switchingPictures() {
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
};






// $("#map").on("click", "span", function() {
// 	$("#placeHolder").css("display","none");
// 	$("#showImage").show();
// 	$(".show").css("display", "none");
// 		if($(this).hasClass("location1") ){
// 			$(".location1").show();
// 	}	if($(this).hasClass("location2") ){
// 			$(".location2").show();
// 	}	if($(this).hasClass("location3") ){
// 			$(".location3").show();
// 	}	if($(this).hasClass("location4") ){
// 			$(".location4").show();
// 	}	if($(this).hasClass("location5") ){
// 			$(".location5").show();
// 	}	if($(this).hasClass("location6") ){
// 			$(".location6").show();
// 	}	
// });


// $(".pictureChange").on("click", function() {
// 	$("#placeHolder").css("display","none");
// 	$("#showImage").show();
// 	$(".show").css("display", "none");
// 		if($(this).hasClass("location1") ){
// 			$(".location1").show();
// 	}	if($(this).hasClass("location2") ){
// 			$(".location2").show();
// 	}	if($(this).hasClass("location3") ){
// 			$(".location3").show();
// 	}	if($(this).hasClass("location4") ){
// 			$(".location4").show();
// 	}	if($(this).hasClass("location5") ){
// 			$(".location5").show();
// 	}	if($(this).hasClass("location6") ){
// 			$(".location6").show();
// 	}

// });

//Testing slides

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }









  });