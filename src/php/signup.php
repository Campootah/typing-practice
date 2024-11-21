<?php

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

// Handling registration
if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])) {
    $finalUser = $_POST['username'];
    $finalPass = $_POST['password'];
    $finalEmail = $_POST['email'];

    // Check if the username already exists
    $checkUser = "SELECT * FROM user_table WHERE username='$finalUser'";
    $checkUserResult = mysqli_query($conn, $checkUser);

    // Check if the email already exists
    $checkEmail = "SELECT * FROM user_table WHERE email='$finalEmail'";
    $checkEmailResult = mysqli_query($conn, $checkEmail);

    if (mysqli_num_rows($checkUserResult) > 0) {
        echo "<script>alert('Username already exists.')</script>";
    } else if (mysqli_num_rows($checkEmailResult) > 0) {
        echo "<script>alert('An account with this email already exists.')</script>";
    }
    else {
        // Insert the new user into the database
        $insertQuery = "INSERT INTO user_table (username, password, email) VALUES ('$finalUser', '$finalPass', '$finalEmail')";
        $insertResult = mysqli_query($conn, $insertQuery);

        if ($insertResult) {
            echo "<script>alert('Registration successful!')</script>";
        } else {
            echo "<p> Error: " . $insertQuery . "<br>" . mysqli_error($conn) . "</p>";
        }
    }
} else {
    echo "<script>alert('Username, password or email isn't entered.')</script>";
}

mysqli_close($conn);
?>
