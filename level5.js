document.addEventListener("DOMContentLoaded", () => {
alert("JavaScript loaded!");
    const introPage = document.getElementById("introPage");
    const lettersPage = document.getElementById("lettersPage");

    const startBtn = document.getElementById("startBtn");

    const popup = document.getElementById("questionPopup");

    const letters = document.querySelectorAll(".letter");
    const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const responseMessage = document.getElementById("responseMessage");
const submitBtn = document.getElementById("submitBtn");

let selectedAnswer = null;

    /* ==========================
       START BUTTON
    ========================== */

    lettersPage.style.display = "none";

    startBtn.addEventListener("click", () => {

        introPage.style.display = "none";

        lettersPage.style.display = "flex";

    });

    /* ==========================
       OPEN POPUP
    ========================== */

    letters.forEach((letter, index) => {

    letter.addEventListener("click", () => {

        popup.classList.remove("hidden");

        responseMessage.textContent = "";

        selectedAnswer = null;

        questionText.innerHTML =
        "When is your birthday? 🤨<br>(Don't check your phone🙄)";

        options.innerHTML = "";

        const choices = [
            "12th July",
            "13th July",
            "14th July",
            "16th July"
        ];

        choices.forEach((choice, i) => {

            const button = document.createElement("button");

            button.className = "option";

            button.textContent = choice;

            button.onclick = () => {

                document.querySelectorAll(".option").forEach(btn => {

                    btn.classList.remove("selected");

                });

                button.classList.add("selected");

                selectedAnswer = i;

            };

            options.appendChild(button);

        });

    });


submitBtn.addEventListener("click", () => {

    if (selectedAnswer === null) {

        responseMessage.textContent = "Choose an answer first🥹";
        return;

    }

    if (selectedAnswer === 2) {

        responseMessage.textContent =
        "🤣 I'm surprised you actually know this one.";

    } else {

        responseMessage.textContent =
        "EXCUSE ME?? IT'S YOUR BIRTHDAY!😭";

    }

});
});
