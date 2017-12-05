<?php 

function setComments($conn) {
	if(isset($_POST['commentSubmit'])){
		$uid = $_POST['uid'];
		$message = $_POST['message'];

		$sql = "INSERT INTO comments (uid, message) 
		VALUES ('$uid', '$message')";
		$result = mysqli_query($conn, $sql);
	}
}