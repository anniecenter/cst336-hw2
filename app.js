$(document).ready(function() {
    // Global Variables
    var limbs = 0;
    var correctLetters = 0;
    var word;
    var words = ["ARACHNID",    "SPINACH",      "ANTARCTICA",       "HYPHEN",       "SEVEN",        "OPERATOR",     "PYTHON",       "STYLE",        "TERTIARY",     "CHICKEN",
                 "UNIQUE",      "ZEBRA",        "HELICOPTER",       "LARYNX",       "BASS",         "TWILIGHT",     "STARLIGHT",    "AMERICA",      "ANDROID",      "DIAMONDS",
                 "APPLE",       "OXEN",         "ROBOTIC",          "HYPNOTIC",     "EXOTIC",       "HAZARD",       "SWAGGER",      "CROCODILE",    "PENDULUM",     "CABBAGE",
                 "PECULIAR",    "SPECIAL",      "OLIVE",            "CATASTROPHE",  "ANOMALY",      "AUTOMATIC",    "APOSTROPHE",   "SPECIES",      "NEVERMORE",    "CRITIQUE",
                 "EXPRESSION",  "PARALYZED",    "EMPATHETIC",       "ROMANTIC",     "BLASPHEMY",    "BECAUSE",      "BETROTHED",    "CHEESECAKE",   "XYLOPHONE",    "ANTIQUE",
                 "DAREDEVIL",   "BASTION",      "EGYPT",            "SYMPATHETIC",  "SYNTHETIC",    "COORDINATES",  "PEDANTIC",     "METTLE",       "DEXTERITY",    "SPECTER",
                 "FABRICATE",   "GYRATE",       "INCOGNITO",        "IGNITION",     "JAGUAR",       "NICARAGUA",    "QUANTUM",      "CALIGRAPHY",   "VOLUPTUOUS",   "GHOST",
                 "VELOCITY",    "PHILOSOPHY",   "XENOPHOBIC",       "YESTERAY",     "OLYMPICS",     "ASYMMETRIC",   "VOLUNTEER",    "ASYMPTOMATIC", "ISOMETRIC",    "ELECTRIC"];
    
    function chooseWord() {
        let x = Math.floor(Math.random() * 79);
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