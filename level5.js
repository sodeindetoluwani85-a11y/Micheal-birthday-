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

    const letterOnePage = document.getElementById("letterOnePage");
    const letterOneText = document.getElementById("letterOneText");
    const nextLetter = document.getElementById("nextLetter");

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
            selectedAnswer = null;
            responseMessage.textContent = "";

            questionText.textContent = questions[index].question;

            optionsContainer.innerHTML = "";

            questions[index].options.forEach((option, i) => {

                const btn = document.createElement("button");

                btn.className = "optionBtn";
                btn.textContent = option;

                btn.onclick = () => {

                    document.querySelectorAll(".optionBtn").forEach(button => {

                        button.classList.remove("selected");

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
       SUBMIT ANSWER
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

                if (currentLetter === 0) {

                    lettersPage.classList.add("hidden");

                    letterOnePage.classList.remove("hidden");

                    letterOneText.innerHTML = `

<h2 class="letterTitle">Happy Birthday, Baby ❤️</h2>

<p>
Hi baby, happy birthday my love❤️
</p>

<p>
I know you don't really fancy your birthdays, but I wanted to make this year special. ❤️
I was going to just write a letter and post pictures of us on the QR code, but then I realized I could do this instead because it'll be more meaningful. 🥹❤️
</p>

<p>
I just want you to know that I love you so much, and you mean so much to me.
</p>

<p>
You've helped me in so many ways that you don't even know about. Sometimes I randomly start thinking about how good you are to me, and then I realize how lucky I am to have someone like you as my boyfriend. ❤️
</p>

<p>
I'm so grateful for you, and I hope the joy in you never dies. 🥹❤️
</p>

<div class="heartDivider">❤️ ❤️ ❤️</div>

<p class="signature">
Love always,<br>
Your favorite girlfriend 🤭❤️
</p>

`;

                }

            }, 1200);

        }

        else {

            responseMessage.textContent = questions[currentLetter].wrong;

        }

    });

    /* ==========================
       CONTINUE BUTTON
    ========================== */

    nextLetter.addEventListener("click", () => {

        letterOnePage.classList.add("hidden");

        lettersPage.classList.remove("hidden");

    });

});
