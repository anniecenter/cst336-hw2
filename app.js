$(document).ready(function() {
    // Global Variables
    var limbs = 0;
    var correctLetters = 0;
    var words = ["ARACHNID", "SPINACH", "ANTARCTICA", "HYPHEN", "SEVEN", "OPERATOR", "PYTHON", "STYLE", "TERNARY", 
                 "UNIQUE", "ZEBRA", "HELICOPTER", "LARYNX", "BASS", "TWILIGHT", "STARLIGHT", "AMERICA", "ANDROID",
                 "APPLE", "OXEN", "ROBOTIC", "HYPNOTIC", "EXOTIC", "HAZARD", "SWAGGER", "CROCODILE", "PENDULUM"]
    var word;
    
    function chooseWord() {
        let x = Math.floor(Math.random() * 26);
        word = words[x];
    }
    
    function displayWord() {
        for(let i = 0; i < word.length; i++) {
            $("#word").append(`<div class="wordLtr" id="ltr${i}">${word.charAt(i)}</div>`);
        }
    }
    
    function displayLetters() {
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                       "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    
        for(let i = 0; i < letters.length; i++) {
            $("#letters").append(` <button class="letter" id="ltr${i}"
            value="${letters[i]}"> <label for="${letters[i]}">
            ${letters[i]}</label>`);
        }
    }
    
    function youWin() {
        $("#message").append("<div style='color: green'>You Win!</div>");
    }
    
    function correctGuess(letter) {
        for(let i = 0; i < word.length; i++) {
            if(document.getElementById(`ltr${i}`).textContent == letter) {
                document.getElementById(`ltr${i}`).style.color = "white";
                correctLetters += 1;
                
                if(correctLetters == word.length) {
                    youWin();
                }
            }
        }
    }
    
    function gameOver() {
        $("#hangman").attr("src", `img/hangman9.png`);
        $("#message").append("<div style='color: red'>Game Over!</div>");
        for(let i = 0; i < word.length; i++) {
            document.getElementById(`ltr${i}`).style.color = "white";
            document.getElementById(`ltr${i}`).style.backgroundColor = "red";
        }
    }
    
    function addLimb() {
        if(limbs < 8) {
            limbs += 1;
            $("#hangman").attr("src", `img/hangman${limbs}.png`);
        }
        else {
            gameOver();
        }
    }
    
    chooseWord();
    displayWord();
    displayLetters();
    
    // Event Listeners
    $(".letter").on("click", function() {
        if(!word.includes(this.value)) {
            addLimb();
        }
        else {
            correctGuess(this.value);
        }
        this.disabled = true;
    });
    
    $("#newWordBtn").on("click", function() {
        document.location.href = "";
    });
});