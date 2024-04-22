document.addEventListener("DOMContentLoaded", function() {
    // Define constant for the correct answer
    const CORRECT_ANSWER = "Paris";

    // Function to ask a trivia question
    function askQuestion() {
        var answer = document.getElementById("trivia-answer").value;
        var responseDiv = document.getElementById("trivia-response");

        if (answer.toLowerCase() === CORRECT_ANSWER.toLowerCase()) {
            responseDiv.textContent = "You guessed: " + answer + ". That's correct!";
        } else {
            responseDiv.textContent = "You guessed: " + answer + ". That's incorrect. Try again!";
        }
    }

    // Function to check if a number is odd or even and if it's a 5-digit integer
    function checkNumber() {
        var number = document.getElementById("number-input").value;

        if (/^\d{5}$/.test(number)) {
            number = parseInt(number);
            if (number % 2 === 0) {
                alert("The number " + number + " is even.");
            } else {
                alert("The number " + number + " is odd.");
            }
        } else {
            alert("Please enter a valid 5-digit number.");
        }
    }

    // Trivia form submit event
    document.getElementById("trivia-submit").addEventListener("click", function() {
        askQuestion();
    });

    // Number check form submit event
    document.getElementById("number-submit").addEventListener("click", function() {
        checkNumber();
    });

    // Allow hitting enter to submit guesses for the trivia question
    document.getElementById("trivia-answer").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            askQuestion();
        }
    });

    // Allow hitting enter to submit guesses for the number question
    document.getElementById("number-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkNumber();
        }
    });
});

