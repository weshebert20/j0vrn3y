<?php 
	include 'dbh.inc.php';
	include 'comments.inc.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="style5.css">
	<title>Document</title>

</head>
<body>

	<header>SEND ME SOME FEEDBACK</header>

	<?php
	echo "<form id='form' class='topBefore' method='POST' action='".setComments($conn)."'>
		  <input id='name' type='text' name='uid' placeholder='Who?' value=''>
		  <textarea id='message' type='text' name='message' placeholder='Comment'></textarea>
  		<button id='submit' name='commentSubmit' type='submit'>GO!</button>
	</form>";
	?>
</body>
</html>