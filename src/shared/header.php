<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/client.js" charset="utf-8" defer></script>

    <title>Inqool projekt</title>

</head>

<body>

    <nav class="navigation">

        <img src="img/me.jpg" alt="Me" onclick="topFunction()">

        <ul class="navigation__link-list">
            <li onclick="scrollToTargetAdjusted('portfolio')">portfolio</li>
            <li onclick="scrollToTargetAdjusted('skills')">skills</li>
        </ul>

        <div class="navigation__search">
            <input type="text" placeholder="Search" class="navigation__search--input" id="search"> 
            <img src="img/loupe.png" alt="Search" class="navigation__search--img" onclick="searchBar()">
        </div>

        <div id="menuButton" class="navigation__openbtn" onclick="changeNav()">
            <div></div>
            <div></div>
            <div></div>
        </div>

    </nav>