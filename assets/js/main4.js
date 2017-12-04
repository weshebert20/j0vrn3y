$(document).ready(function(){

$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});


  var light=$("#light").get(0);
  var animPos=0;
  var animating=true;
  
  $(document).mousemove(function(event){
    animating=false;
    var x=event.pageX;
    var y=event.pageY;
    setLight(x,y);
  });
  function setLight(x,y){
    light.setAttribute("x", x);
    light.setAttribute("y", y);
  }
});