$(document).ready(function() {
    // Global Variables
    var limbs = 0;
    var words = ["GITHUB", "HEROKU", "HYPHEN", "JAVASCRIPT", "OPERATOR", "PYTHON", "STYLE", "TERNARY", "UNICODE", "ZEBRA"]
    var word;
    
    function chooseWord() {
        let x = Math.floor(Math.random() * 10);
        word = words[x];
    }
    
    chooseWord();
    
    function displayBlankWord() {
        for(let i = 0; i < word.length; i++) {
            $("#word").append(`<div class="wordLtr" id="ltr${i}">${word.charAt(i)}</div>`);
        }
    }
    
    displayBlankWord();
    
    function displayLetters() {
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                       "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                    
        for(let i = 0; i < letters.length; i++) {
            $("#letters").append(` <button class="letter" id="${letters[i]}"
            value="${letters[i]}"> <label for="${letters[i]}">
            ${letters[i]}</label>`);
        }
    }
    
    displayLetters();
    
    // Event Listeners
    $(".letter").on("click", function() {
        if(!word.includes(this.value)) {
            addLimb();
        }
        else {
            
        }
        this.disabled = true;
    });
    
    
    
    function addLimb() {
        limbs += 1;
        $("#hangman").attr("src", `img/hangman${limbs}.png`);
    }
});