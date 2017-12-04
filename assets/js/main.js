
$(document).ready(function($){

window.addEventListener("load", onLoad);

$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

///////////////////
// star animations
///////////////////


var width = 1414;
var height = 3200;


var banner = document.querySelector("#banner");
var baseStar = document.querySelector(".star");

var frag = document.createDocumentFragment();


var appearMin = 0.3;
var appearMax = 0.8;

var delayMin = 2;
var delayMax = 6;

var durationMin = 0.3;
var durationMax = 1;

var numAnimations = 50;
var numStars = 2000;

var stars = [];
var eases = [];

for (var i = 0; i < numAnimations; i++) {
  
  var ease = new RoughEase({ 
    template:  Linear.easeNone, 
    strength: random(1, 3), 
    points: Math.floor(random(50, 200)), 
    taper: "both", 
    randomize: true, 
    clamp: true
  });
  
  eases.push(ease);
}

// Wait for images to load


function onLoad() {
    
  for (var i = 0; i < numStars; i++) {
    stars.push(createStar());
  }
  
  document.body.removeChild(baseStar);
  banner.appendChild(frag);
}

function createStar() {
  var star = baseStar.cloneNode(true);
  frag.appendChild(star);
  
  TweenLite.set(star, {
    rotation: random(360),
    xPercent: -50,
    yPercent: -50,
    scale: 0,
    x: random(width),
    y: random(height),
  });
  
  var tl = new TimelineMax({ repeat: -1, yoyo: true });
   
  for (var i = 0; i < numAnimations; i++) {
    
    var ease1 = eases[Math.floor(random(numAnimations))];
    var ease2 = eases[Math.floor(random(numAnimations))];
    
    var alpha = random(0.7, 1);
    var scale = random(0.15, 0.4);
    
    var appear = "+=" + random(appearMin, appearMax);
    var delay = "+=" + random(delayMin, delayMax);  
    var duration1 = random(durationMin, durationMax);
    var duration2 = random(durationMin, durationMax);   
    
    tl.to(star, duration1, { autoAlpha: alpha, scale: scale, ease: ease1 }, delay)
      .to(star, duration2, { autoAlpha: 0, scale: 0, ease: ease2 }, appear)
  }
    
  tl.progress(random(1));
  
  return {
    element: star,
    timeline: tl
  };
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}

var sdSound = document.getElementById("neon-sign");
var sdTxt = document.getElementById("neondiv");

sdTxt.onmouseover=function(){  
sdSound.play();  
return false;  
}; 

///////////////
//scrollmagic
///////////////

var controller = new ScrollMagic.Controller();

var pinIntro = new ScrollMagic.Scene({
	duration: 2000
})
.setPin('#intro-img');
controller.addScene(pinIntro);

// var photoPar = new ScrollMagic.Scene({
//   triggerHook: 1
// })
// .setPin('#image-back');
// controller.addScene(photoPar);

///////////
//rellaxer
///////////

var rellax = new Rellax('.rellax');

////////////////////
// neon flickering//
////////////////////

var textHolder = document.getElementsByTagName('h1')[1],
  text = textHolder.innerHTML,
  chars = text.length,
  newText = '',
  i;  

for (i = 0; i < chars; i += 1) {
  newText += '<i>' + text.charAt(i) + '</i>';
}

textHolder.innerHTML = newText;

var letters = document.getElementsByTagName('i'),
  flickers = [5, 7, 9, 11, 13, 15, 17],
  randomLetter,
  flickerNumber,
  counter;

function randomFromInterval(from,to) {
  return Math.floor(Math.random()*(to-from+1)+from);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function flicker() {    
  counter += 1;
  
  if (counter === flickerNumber) {
    return;
  }

  setTimeout(function () {
    if(hasClass(randomLetter, 'off')) {
      randomLetter.className = '';
    }
    else {
      randomLetter.className = 'off';
    }

    flicker();
  }, 30);
}

(function loop() {
    var rand = randomFromInterval(500,3000);

  randomLetter = randomFromInterval(0, 3);
  randomLetter = letters[randomLetter];
  
  flickerNumber = randomFromInterval(0, 6);
  flickerNumber = flickers[flickerNumber];

    setTimeout(function() {
            counter = 0;
            flicker();
            loop();  
    }, rand);
}());


//////////////////
//parallax photo//
//////////////////

	//define store some initial variables
	var	halfWindowH = $(window).height()*0.5,
		halfWindowW = $(window).width()*0.5,
		//define a max rotation value (X and Y axises)
		maxRotationY = 5,
		maxRotationX = 3,
		aspectRatio;

	//detect if hero <img> has been loaded and evaluate its aspect-ratio
	$('.cd-floating-background').find('img').eq(0).load(function() {
		aspectRatio = $(this).width()/$(this).height();
  		if( $('html').hasClass('preserve-3d') ) initBackground();
	}).each(function() {
		//check if image was previously load - if yes, trigger load event
  		if(this.complete) $(this).load();
	});
	
	//detect mouse movement
	$('.cd-background-wrapper').each(function(){
		$(this).on('mousemove', function(event){
			var wrapperOffsetTop = $(this).offset().top;
			if( $('html').hasClass('preserve-3d') ) {
				window.requestAnimationFrame(function(){
					moveBackground(event, wrapperOffsetTop);
				});
			}
		});
	});

	//on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
	$(window).on('resize', function(){
		if( $('html').hasClass('preserve-3d') ) {
			window.requestAnimationFrame(function(){
				halfWindowH = $(window).height()*0.5,
				halfWindowW = $(window).width()*0.5;
				initBackground();
			});
		} else {
			$('.cd-background-wrapper').attr('style', '');
			$('.cd-floating-background').attr('style', '').removeClass('is-absolute');
		}
	});

	function initBackground() {
		var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
			proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
			newImageWidth = Math.ceil(halfWindowW*2*proportions),
			newImageHeight = Math.ceil(newImageWidth/aspectRatio),
			newLeft = halfWindowW - newImageWidth/2,
			newTop = (wrapperHeight - newImageHeight)/2;

		//set an height for the .cd-background-wrapper
		$('.cd-background-wrapper').css({
			'height' : wrapperHeight,
		});
		//set dimentions and position of the .cd-background-wrapper		
		$('.cd-floating-background').addClass('is-absolute').css({
			'left' : newLeft,
			'top' : newTop,
			'width' : newImageWidth,
		});
	}

	function moveBackground(event, topOffset) {
		var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
			yPosition = event.pageY - topOffset,
			rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;

		if( rotateY > maxRotationY) rotateY = maxRotationY;
		if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
		if( rotateX > maxRotationX) rotateX = maxRotationX;
		if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

		$('.cd-floating-background').css({
			'-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		});
	}
});

/* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
	https://github.com/Modernizr/Modernizr/issues/762 */
(function getPerspective(){
  var element = document.createElement('p'),
      html = document.getElementsByTagName('html')[0],
      body = document.getElementsByTagName('body')[0],
      propertys = {
        'webkitTransformStyle':'-webkit-transform-style',
        'MozTransformStyle':'-moz-transform-style',
        'msTransformStyle':'-ms-transform-style',
        'transformStyle':'transform-style'
      };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
                    st.getPropertyValue("-moz-transform-style") ||
                    st.getPropertyValue("-ms-transform-style") ||
                    st.getPropertyValue("transform-style");

    if(transform!=='preserve-3d'){
      html.className += ' no-preserve-3d';
    } else {
    	html.className += ' preserve-3d';
    }
    document.body.removeChild(element);


})();


///////////////////
//MOON PHASE API///
///////////////////

function load_moon_phases(obj){
  var gets=[];
  for (var i in obj){
    gets.push(i+"="+encodeURIComponent(obj[i]));
  } 
  var xmlhttp = new XMLHttpRequest();
  var url = "http://www.icalendar37.net/lunar/api/?"+gets.join("&");
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var moon  = JSON.parse(xmlhttp.responseText);
      example_1(moon);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
document.addEventListener("DOMContentLoaded", function() { 
  var configMoon = {
    lang      :'en',
    month     :new Date().getMonth() + 1, // 1  - 12
    year      :new Date().getFullYear(),
    size    :68, //pixels
    lightColor  :"#FFFFFF", //CSS color
    shadeColor  :"#111111", //CSS color
    sizeQuarter :20, //pixels
    texturize :true //true - false
  };
  configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000;
  load_moon_phases(configMoon);
});

function example_1(moon){
  var day = new Date().getDate()
  var dayWeek=moon.phase[day].dayWeek
  var html="<div class='moon'>"
  html+=moon.phase[day].svg
  html+="</div>"
  document.getElementById("ex1").innerHTML=html
}



