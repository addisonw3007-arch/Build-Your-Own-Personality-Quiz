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
