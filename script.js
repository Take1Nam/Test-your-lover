const questions = [
    { question: "What was the location of our first engagement date?", answers: ["Beach", "Park", "Restaurant", "Museum"], correct: 2, detailLevel: 1 },
    // Add more questions with varying levels of detail here
];

let currentQuestionIndex = 0;
let currentDetailLevel = 1;

function displayQuestion() {
    const question = questions.find(q => q.detailLevel === currentDetailLevel);
    document.getElementById("question").textContent = question.question;
    const options = document.getElementById("options");
    options.innerHTML = "";
    question.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => handleAnswer(index === question.correct);
        li.appendChild(button);
        options.appendChild(li);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        currentDetailLevel++;
    } else {
        currentDetailLevel = Math.max(1, currentDetailLevel - 1);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<div>Quiz Completed!</div>";
    }
}

document.getElementById("next").addEventListener("click", () => {
    displayQuestion();
});

displayQuestion();
