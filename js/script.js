console.log("script.js connected!");

const questions = document.querySelectorAll(".question-block");

console.log("Number of questions:", questions.length);


const selectedAnswers = {};

// Go through each question block
questions.forEach((question, index) => {

    // Find all answer buttons inside this question
    const buttons = question.querySelectorAll(".answer-btn");

    // Add a click event to each button
    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            // Remove selected from all buttons in this question
            buttons.forEach((btn) => {
                btn.classList.remove("selected");
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-outline-primary");
            });

            // Highlight the answer that was clicked
            button.classList.add("selected");
            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-primary");

            // Store the selected answer
            selectedAnswers[index] = button.dataset.answer;

            // Check the selected answers in the console
            console.log("Selected answers:", selectedAnswers);
        });
    });
});

 // Calculate and display the quiz result
function displayResult() {

    // Count how many questions were answered
    if (Object.keys(selectedAnswers).length !== questions.length) {
        alert("Please answer all questions before viewing your result!");
        return;
    }

    // Create a score for each personality
    const scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    // Count the selected answers
    Object.values(selectedAnswers).forEach((answer) => {
        scores[answer]++;
    });

    // Find the personality with the highest score
    let highestScore = 0;
    let winningAnswer = "";

    for (let answer in scores) {
        if (scores[answer] > highestScore) {
            highestScore = scores[answer];
            winningAnswer = answer;
        }
    }

    // Match the winning answer to a personality
    const personalities = {
        A: "The Academic Overachiever! You are organized, motivated, and always working toward your goals.",
        B: "The Last-Minute Genius! You work well under pressure and somehow always get things done.",
        C: "The Social Butterfly! You love meeting people, making memories, and working with others.",
        D: "The Laid-Back Student! You enjoy taking life one day at a time and keeping things relaxed."
    };

    // Display the result on the webpage
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    resultText.textContent = personalities[winningAnswer];
    resultContainer.style.display = "block";

    console.log("Final scores:", scores);
    console.log("Quiz result:", winningAnswer);
}

// Run displayResult when Show Results is clicked
document.getElementById("show-result").addEventListener("click", displayResult);

