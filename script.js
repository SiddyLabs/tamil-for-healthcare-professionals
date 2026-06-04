let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let mistakes = [];
let currentMode = "t2e";

const container = document.querySelector(".container");

document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz() {

    const requestedQuestions = parseInt(
        document.getElementById("questionCount").value
    );
const selectedMode =
    document.querySelector(
        'input[name="mode"]:checked'
    ).value;
    if (requestedQuestions < 5) {
        alert("Minimum 5 questions");
        return;
    }

    if (requestedQuestions > QUESTIONS.length) {
        alert(
            `Maximum available questions: ${QUESTIONS.length}`
        );
        return;
    }

    quizQuestions = shuffle([...QUESTIONS]).slice(
        0,
        requestedQuestions
    );

    currentQuestionIndex = 0;
    currentMode = selectedMode;
    score = 0;
    streak = 0;
    bestStreak = 0;
    mistakes = [];

    showQuestion();
}

function showQuestion() {

    const question = quizQuestions[currentQuestionIndex];

    const options = buildOptions(question);

    container.innerHTML = `
        <h1>Tamil for Healthcare Professionals</h1>

        <div class="card">

            <h2>
                Question ${currentQuestionIndex + 1}
                / ${quizQuestions.length}
            </h2>

            <h3>
${
    currentMode === "t2e"
        ? question.tamil
        : question.english
}
</h3>

            <div id="options">
                ${options
                    .map(
                        option => `
                        <button class="optionBtn">
                            ${option}
                        </button>
                    `
                    )
                    .join("")}
            </div>

        </div>
    `;

    document
        .querySelectorAll(".optionBtn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const selected = button.textContent.trim();

               const correctAnswer =
    currentMode === "t2e"
        ? question.english
        : question.tamil;

if (selected === correctAnswer) {

                    score++;

                    streak++;

                    if (streak > bestStreak) {
                        bestStreak = streak;
                    }

                } else {

                    streak = 0;

                    mistakes.push({

    question:
        currentMode === "t2e"
            ? question.tamil
            : question.english,

    answer:
        currentMode === "t2e"
            ? question.english
            : question.tamil

});
                }

                currentQuestionIndex++;

                if (
                    currentQuestionIndex >= quizQuestions.length
                ) {
                    showResults();
                } else {
                    showQuestion();
                }

            });

        });

}

function showResults() {

    const accuracy =
        (
            (score / quizQuestions.length) * 100
        ).toFixed(1);

    let mistakesHtml = "";

    if (mistakes.length === 0) {

        mistakesHtml =
            "<p>No mistakes. Excellent!</p>";

    } else {

        mistakes.forEach((item, index) => {

            mistakesHtml += `
                <div class="card">
                    <strong>${index + 1}. ${item.question}</strong>
                    <br>
                    Correct Answer:
                    ${item.answer}
                </div>
            `;

        });

    }

    container.innerHTML = `
        <h1>Quiz Complete</h1>

        <div class="card">

            <p><strong>Score:</strong>
            ${score} / ${quizQuestions.length}</p>

            <p><strong>Accuracy:</strong>
            ${accuracy}%</p>

            <p><strong>Best Streak:</strong>
            ${bestStreak}</p>

        </div>

        <h2>Mistakes</h2>

        ${mistakesHtml}

        <br>

        <button onclick="location.reload()">
            New Quiz
        </button>
    `;
}

function buildOptions(question) {

    const correctAnswer =
        currentMode === "t2e"
            ? question.english
            : question.tamil;

    const wrongAnswers = shuffle(

        QUESTIONS
            .filter(q => {

                return currentMode === "t2e"
                    ? q.english !== question.english
                    : q.tamil !== question.tamil;

            })
            .map(q => {

                return currentMode === "t2e"
                    ? q.english
                    : q.tamil;

            })

    ).slice(0, 3);

    return shuffle([
        correctAnswer,
        ...wrongAnswers
    ]);

}
function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [array[i], array[j]] =
        [array[j], array[i]];
    }

    return array;
}