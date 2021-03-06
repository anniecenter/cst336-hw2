<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Hangman</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <h1>Hangman</h1>
        </header>
        <main>
            <!-- Message -->
            <div id="message"></div>
            <!-- Word -->
            <div id="word"></div>
            <br><br>
            <!-- Hangman Graphic -->
            <img src="img/hangman0.png" id="hangman"/>
            <br><br><br>
            <!-- Letter Buttons -->
            <div id="letters"></div>
            <br><br><br>
            <!-- New Word Button -->
            <button id="newWordBtn">New Word</button>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	    <script src="app.js"></script>
    </body>
</html>