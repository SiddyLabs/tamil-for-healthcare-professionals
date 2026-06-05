let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let mistakes = [];
let currentMode = "t2e";
let currentDifficulty = "beginner";

const container = document.querySelector(".container");

document
    .getElementById("startBtn")
    .addEventListener("click", startQuiz);

function startQuiz() {

    const requestedQuestions = parseInt(
        document.getElementById("questionCount").value
    );

    const selectedMode =
        document.querySelector(
            'input[name="mode"]:checked'
        ).value;

        const selectedDifficulty =
    document.querySelector(
        'input[name="difficulty"]:checked'
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

    currentMode = selectedMode;
    currentDifficulty = selectedDifficulty;

    quizQuestions =
    generateQuestions(
        requestedQuestions,
        currentDifficulty
    );

    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    bestStreak = 0;
    mistakes = [];

    showQuestion();
}

function generateQuestions(
    totalQuestions,
    difficulty
) {

    let wordPercent;
    let phrasePercent;
    let sentencePercent;

    if (difficulty === "beginner") {

        wordPercent = 0.50;
        phrasePercent = 0.30;
        sentencePercent = 0.20;

    } else if (
        difficulty === "intermediate"
    ) {

        wordPercent = 0.25;
        phrasePercent = 0.35;
        sentencePercent = 0.40;

    } else {

        wordPercent = 0.10;
        phrasePercent = 0.20;
        sentencePercent = 0.70;

    }

    const words =
        QUESTIONS.filter(
            q => q.type === "word"
        );

    const phrases =
        QUESTIONS.filter(
            q => q.type === "phrase"
        );

    const sentences =
        QUESTIONS.filter(
            q => q.type === "sentence"
        );

    const selectedWords =
        shuffle([...words]).slice(
            0,
            Math.round(
                totalQuestions *
                wordPercent
            )
        );

    const selectedPhrases =
        shuffle([...phrases]).slice(
            0,
            Math.round(
                totalQuestions *
                phrasePercent
            )
        );

    const selectedSentences =
        shuffle([...sentences]).slice(
            0,
            Math.round(
                totalQuestions *
                sentencePercent
            )
        );

    return shuffle([

        ...selectedWords,
        ...selectedPhrases,
        ...selectedSentences

    ]).slice(
        0,
        totalQuestions
    );

}

function showQuestion() {

    const question =
        quizQuestions[currentQuestionIndex];

    const options =
        buildOptions(question);

    const questionText =
        currentMode === "t2e"
            ? question.tamil
            : question.english;

    container.innerHTML = `
        <h1>Tamil for Healthcare Professionals</h1>

        <div class="card">

            <h2>
                Question ${currentQuestionIndex + 1}
                / ${quizQuestions.length}
            </h2>

            <h3>${questionText}</h3>

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

            button.addEventListener(
                "click",
                () => handleAnswer(
                    question,
                    button.textContent.trim()
                )
            );

        });

}

function handleAnswer(
    question,
    selected
) {

    const correctAnswer =
        currentMode === "t2e"
            ? question.english
            : question.tamil;

    const wasCorrect =
        selected === correctAnswer;

    if (wasCorrect) {

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
                correctAnswer

        });

    }

    const buttons =
    document.querySelectorAll(".optionBtn");

buttons.forEach(button => {

    button.disabled = true;
button.style.cursor = "not-allowed";
    const text =
        button.textContent.trim();

    if (text === correctAnswer) {

        button.style.backgroundColor =
            "#4CAF50";

        button.style.color = "white";

    }

    if (
        text === selected &&
        !wasCorrect
    ) {

        button.style.backgroundColor =
            "#f44336";

        button.style.color = "white";

    }

});

const feedbackDiv =
    document.createElement("div");

feedbackDiv.innerHTML = wasCorrect
    ? "<h3>✅ Correct!</h3>"
    : `<h3>❌ Wrong! Correct answer: ${correctAnswer}</h3>`;

document
    .querySelector(".card")
    .appendChild(feedbackDiv);

const nextButton =
    document.createElement("button");

nextButton.textContent =
    "Next Question";

nextButton.addEventListener(
    "click",
    () => {

        currentQuestionIndex++;

        if (
            currentQuestionIndex >=
            quizQuestions.length
        ) {

            showResults();

        } else {

            showQuestion();

        }

    }
);

document
    .querySelector(".card")
    .appendChild(nextButton);
}



function showResults() {

    const accuracy =
        (
            score /
            quizQuestions.length *
            100
        ).toFixed(1);

    let mistakesHtml = "";

    if (mistakes.length === 0) {

        mistakesHtml =
            "<p>No mistakes. Excellent!</p>";

    } else {

        mistakes.forEach(
            (item, index) => {

                mistakesHtml += `
                    <div class="card">

                        <strong>
                            ${index + 1}.
                            ${item.question}
                        </strong>

                        <br>

                        Correct Answer:
                        ${item.answer}

                    </div>
                `;

            }
        );

    }

    container.innerHTML = `
        <h1>Quiz Complete</h1>

        <div class="card">

            <p>
                <strong>Score:</strong>
                ${score}
                /
                ${quizQuestions.length}
            </p>

            <p>
                <strong>Accuracy:</strong>
                ${accuracy}%
            </p>

            <p>
                <strong>Best Streak:</strong>
                ${bestStreak}
            </p>

        </div>

        <h2>
            Questions Answered Incorrectly
        </h2>

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

    const wrongAnswers =
        shuffle(

            QUESTIONS
                .filter(q =>
                    currentMode === "t2e"
                        ? q.english !== question.english
                        : q.tamil !== question.tamil
                )
                .map(q =>
                    currentMode === "t2e"
                        ? q.english
                        : q.tamil
                )

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
                Math.random() *
                (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

    return array;

}