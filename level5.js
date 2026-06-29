document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTS
    ========================== */

    const introPage = document.getElementById("introPage");
    const lettersPage = document.getElementById("lettersPage");

    const startBtn = document.getElementById("startBtn");

    const popup = document.getElementById("questionPopup");

    const letters = document.querySelectorAll(".letter");

    const questionText = document.getElementById("questionText");
    const options = document.getElementById("options");
    const responseMessage = document.getElementById("responseMessage");
    const submitBtn = document.getElementById("submitBtn");
    const letterOnePage = document.getElementById("letterOnePage");
const letterTwoPage = document.getElementById("letterTwoPage");
const letterThreePage = document.getElementById("letterThreePage");

    /* ==========================
       QUESTIONS
    ========================== */

    const questions = [

        {
            question: "When is your birthday? 🤨<br>(Don't check your phone🙄)",

            options: [

                "12th July",
                "13th July",
                "14th July",
                "16th July"

            ],

            answer: 2,

            correct: "🤣 I'm surprised you actually know this one.",

            wrong: "EXCUSE ME?? IT'S YOUR BIRTHDAY!😭"

        }

    ];

    let currentQuestion = 0;
    let selectedAnswer = null;

    /* ==========================
       START PAGE
    ========================== */

    lettersPage.style.display = "none";

    startBtn.addEventListener("click", () => {

        introPage.style.display = "none";

        lettersPage.style.display = "flex";

    });

    /* ==========================
       OPEN FIRST LETTER
    ========================== */

    letters[0].addEventListener("click", () => {

        popup.classList.remove("hidden");

        responseMessage.textContent = "";

        selectedAnswer = null;

        questionText.innerHTML = questions[0].question;

        options.innerHTML = "";

        questions[0].options.forEach((choice, index) => {

            const button = document.createElement("button");

            button.className = "option";

            button.textContent = choice;

            button.addEventListener("click", () => {

                document.querySelectorAll(".option").forEach(btn => {

                    btn.classList.remove("selected");

                });

                button.classList.add("selected");

                selectedAnswer = index;

            });

            options.appendChild(button);

        });

    });

    /* ==========================
       SUBMIT
    ========================== */

    submitBtn.addEventListener("click", () => {

        if (selectedAnswer === null) {

            responseMessage.textContent = "Choose an answer first🥹";

            return;

        }

        if (selectedAnswer === questions[currentQuestion].answer) {

          responseMessage.textContent =
questions[currentQuestion].correct;
setTimeout(() => {

    popup.classList.add("hidden");

    letters[currentQuestion]
        .querySelector(".lock")
        .textContent = "🔓";

    letters[currentQuestion].classList.add("opened");

    lettersPage.style.display = "none";

    if(currentQuestion === 0){

        letterOnePage.classList.remove("hidden");

    }

    else if(currentQuestion === 1){

        letterTwoPage.classList.remove("hidden");

    }

    else if(currentQuestion === 2){

        letterThreePage.classList.remove("hidden");

    }

},1000);
        }

        else {

            responseMessage.textContent =
            questions[currentQuestion].wrong;

        }

    });

});
