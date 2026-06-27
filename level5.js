document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       PAGE ELEMENTS
    ========================== */

    const introPage = document.getElementById("introPage");
    const lettersPage = document.getElementById("lettersPage");
    const startBtn = document.getElementById("startChallenge");

    const popup = document.getElementById("questionPopup");
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const responseMessage = document.getElementById("responseMessage");
    const submitBtn = document.getElementById("submitAnswer");

    const letters = document.querySelectorAll(".lockedLetter");

    /* ==========================
       INTRO
    ========================== */

    startBtn.addEventListener("click", () => {

        introPage.classList.add("hidden");
        lettersPage.classList.remove("hidden");

    });

    /* ==========================
       QUESTIONS
    ========================== */

    const questions = [

        {
            question: "When is your birthday? 🤨\n(Don't check your phone🙄)",

            options: [
                "12th July",
                "13th July",
                "14th July",
                "16th July"
            ],

            answer: 2,

            correct: "🤣 I'm surprised you actually know this one.",

            wrong: "EXCUSE ME?? IT'S YOUR BIRTHDAY!😭"
        },

        {
            question: "When is our anniversary? ❤️",

            options: [
                "18th December",
                "16th February",
                "31st March",
                "30th March"
            ],

            answer: 2,

            correct: "😂 Good. At least I don't have to remind you every year.",

            wrong: "Should I be worried...?🙄"
        },

        {
            question: "The first time I said 'I love you' ❤️",

            options: [
                "28th March",
                "31st March",
                "23rd March",
                "20th March"
            ],

            answer: 2,

            correct: "😒❤️ Okayyy... you passed. Barely.",

            wrong: "😂 I'm pretending I didn't just see that answer. Try again."
        }

    ];

    /* ==========================
       VARIABLES
    ========================== */

    let currentLetter = 0;
    let selectedAnswer = null;

    /* ==========================
       LETTER CLICK
    ========================== */

    letters.forEach((letter, index) => {

        letter.addEventListener("click", () => {

            if (letter.classList.contains("opened")) return;

            currentLetter = index;

            responseMessage.textContent = "";

            selectedAnswer = null;

            questionText.textContent = questions[index].question;

            optionsContainer.innerHTML = "";

            questions[index].options.forEach((option, i) => {

                const btn = document.createElement("button");

                btn.className = "optionBtn";

                btn.textContent = option;

                btn.onclick = () => {

                    document.querySelectorAll(".optionBtn").forEach(b => {

                        b.classList.remove("selected");

                    });

                    btn.classList.add("selected");

                    selectedAnswer = i;

                };

                optionsContainer.appendChild(btn);

            });

            popup.classList.add("show");

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

        if (selectedAnswer === questions[currentLetter].answer) {

            responseMessage.textContent = questions[currentLetter].correct;

            setTimeout(() => {

                popup.classList.remove("show");

                letters[currentLetter].classList.add("opened");

                letters[currentLetter].querySelector(".lock").textContent = "🔓";

            }, 1200);

        }

        else {

            responseMessage.textContent = questions[currentLetter].wrong;

        }

    });

});
