<?php

// session start always take place at the beginning
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "user"; // database name

// connection between Form and MySQL server
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['username']) && isset($_POST['password'])) {
	// username and password is received from login
	$loginUsername = $_POST['username'];
	$loginPassword = $_POST['password'];

	// compare between user input and database values
	$loginQuery = "SELECT * FROM user_table where username = '$loginUsername' AND password = '$loginPassword'";

	//SQL result executed
	$loginResult = mysqli_query($conn, $loginQuery);

	// if number of rows is greater than 0 there is a username and password, match is found 
	// else, match is not
	if (mysqli_num_rows($loginResult) > 0){
		//username is stored to session and forwared to next page
		$_SESSION["myuser"]=$loginUsername;
		$_SESSION["mypassword"]=$loginPassword;
		header("Location:../newpage.html");
	} else {
		echo "<script>alert('Incorrect username or password')</script>"; 
	}
} 

mysqli_close($conn);
?>
