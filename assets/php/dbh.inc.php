<?php

$conn = mysqli_connect('localhost', 'root', '', 'commentsection');

if (!$conn) {
	die("Connection Failed: ".mysqli_connect_error());
}