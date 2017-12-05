<!doctype html>
<html lang="en" class="no-js">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="..css/reset.css"> <!-- CSS reset -->
	<link rel="stylesheet" href="../css/style3.css"> <!-- style -->
	<script src="../js/modernizr.js"></script> <!-- Modernizr -->
  	<link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  	<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
	<title>rain</title>
</head>
<body>

<!--///////////-->
<!-- Preloader -->
<!--///////////-->

 <div id="preloader"></div>

<div id="set-height"></div>
<div id="time"></div>
<div id="scroll"></div>

	<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload"><source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="../img/raindunes4.webm"></source>
  		<p>Sorry, your browser does not support the &lt;video&gt; element.</p>
	</video>

	<div class="container">
  		<a href="index6.html"><h1 class="neon glitch">Your feet in the sand</h1></a>
	</div>

	<!-- glitch effect on hover -->

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>

      <filter id="glitch" x="0" y="0">
          <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
            
        <feOffset in="r" result="r" dx="-5">
          <animate attributeName="dx" attributeType="XML" values="0; -5; 0; -18; -2; -4; 0 ;-3; 0" dur="0.2s" repeatCount="indefinite"/>
        </feOffset>

        <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/>

        <feOffset in="g" result="g" dx="-5" dy="1">
          <animate attributeName="dx" attributeType="XML" values="0; 0; 0; -3; 0; 8; 0 ;-1; 0" dur="0.15s" repeatCount="indefinite"/>
        </feOffset>

        <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b"/>

        <feOffset in="b" result="b" dx="5" dy="2">
          <animate attributeName="dx" attributeType="XML" values="0; 3; -1; 4; 0; 2; 0 ;18; 0" dur="0.35s" repeatCount="indefinite"/>
        </feOffset>

        <feBlend in="r" in2="g" mode="screen" result="blend" />
        <feBlend in="blend" in2="b" mode="screen" result="blend" />
      </filter>
    </defs>
</svg>

<script src="../js/jquery-2.1.1.js"></script>
<script src="../js/main3.js"></script> 

</body>
</html>