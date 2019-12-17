<?php include_once("connect.php"); ?>

<!DOCTYPE html>
<html>
    <head>
        <link type="text/css" rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <?php include_once("header/header.html"); ?>
        <main>
            <h1>SNAKE GAME</h1>
            <?php include_once("snakeGame.html"); ?>
            <?php include_once("comment.php"); ?>
        </main>
        <script src="js/jQuery.js"></script>
        <script src="js/jCanvas.js"></script>
        <script src="snakeGame.js"></script>
    </body>
</html>
