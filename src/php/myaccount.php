<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="../src/css/general_layout.css">
    <link rel="stylesheet" href="../src/css/navbar.css">
    <!-- Page title -->
    <title>Accounts Info - Bat Type</title>
</head>
<body>
    <!-- Navbar -->
    <nav>
        <ul>
            <!-- Home (main menu) -->
            <li class="active">
                <a href="#main_menu"><i class="material-icons" id="homeIcon" style="text-align: left; font-size: 40px; color: #FFFFFF;">home</i></a>
            </li>
            <!-- Settings -->
            <li>
                <a href="#settings"><i class="material-icons" id="settingsIcon" style="text-align: left; font-size: 40px; color: #FFFFFF">settings</i></a>
            </li>
            <!-- TTS (when clicked on, TTS turns off and icon changes to mute symbol)-->
            <li>
                <i class="material-icons" id="TTSIcon" style="text-align: left; font-size: 40px; color: #FFFFFF" onclick="muteTTS()">volume_up</i>
            </li>
            <!-- Account (dropdown contains logout button)-->
            <div class="topnav-right">
            <li>
                <a href="#"><i class="material-icons" id="userIcon" style="text-align: right; font-size: 40px; color: #FFFFFF;">account_circle</i><i class="material-icons" style="text-align: right; font-size: 40px; color: #FFFFFF;">arrow_drop_down</i></a>
                <ul class="dropdown">
                    <li><a href="./php/myaccount.php">My Account</a></li>
                    <li><a href="../index.html">Logout</a></li>
                </ul>
            </li>
            </div>
        </ul>
    </nav>
    <!-- Title -->
    <div class="container">
        <h1>Account Information</h1>
        <h3> Username:
        <?php include 'login.php';
        echo $_SESSION['myuser'];
        ?>
        </h3>
        <h3> Password:
        <?php 
        echo $_SESSION['mypassword'];
        ?>
        </h3>
    </div>

    <!-- Footer -->
    <div class="footer"> 
        <hr>
        <h6>Bat Type</h6>
        <p>Copyright � 2024 Group 2 (the better group)</p>
    </div>
</body>
