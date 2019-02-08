$(window).scroll(function(){
	$(".navbar").addClass("white");
	$(".nav-link").css("color", "#494542");
	$(".navbar-brand").css("color", "#F05F40");
	$(".fa-bars").css("color","#494542");
	if ($(window).scrollTop()== 0){
		$(".navbar").removeClass("white");
		$(".nav-link").css("color", "#C0C4C3");
	    $(".navbar-brand").css("color", "#C0C4C3");
	    $(".fa-bars").css("color","#C0C4C3");
	}
});


 $(window).on('load', function () {
     $("#preload").fadeOut(3000);
 });


var elements = document.getElementsByClassName('grayScale');
for (var i = 0; i < elements.length; i++) {
  new Waypoint({
    element: elements[i],
    handler: function() {
      this.element.style.filter = "grayscale(0)";
    },
    offset: "50%"
  })
}


  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:"1",
  	center:true,
  	autoplay:true,
  	loop:true,
  	smartSpeed:1000,
  });
});





