$(document).ready(function(){

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});

  $('.angle').click(function(e){
    $('.angle').toggleClass('arrow');
  });

});



