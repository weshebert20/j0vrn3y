$(document).ready(function(){

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
	$(".neontwo").hide();
	$(".neonthree").hide();
	$(".neonfour").hide();
	$(".neonfive").hide();
	$(".neonsix").hide();
});

$(window).bind("scroll", function() {

    if ($(this).scrollTop() > 2220) {
        $(".neontwo").fadeIn(3000);
    } else {
        $(".neontwo").stop().fadeOut();
    }
});

$(window).bind("scroll", function() {

    if ($(this).scrollTop() > 4220) {
        $(".neonthree").fadeIn(3000);
    } else {
        $(".neonthree").stop().fadeOut();
    }
});

$(window).bind("scroll", function() {

    if ($(this).scrollTop() > 6220) {
        $(".neonfour").fadeIn(3000);
    } else {
        $(".neonfour").stop().fadeOut();
    }
});

$(window).bind("scroll", function() {

    if ($(this).scrollTop() > 8220) {
        $(".neonfive").fadeIn(3000);
    } else {
        $(".neonfive").stop().fadeOut();
    }
});

$(window).bind("scroll", function() {

    if ($(this).scrollTop() > 10220) {
        $(".neonsix").fadeIn(3000);
    } else {
        $(".neonsix").stop().fadeOut();
    }
});

  $('.angle').click(function(e){
    $('.angle').toggleClass('arrow');
  });



});



