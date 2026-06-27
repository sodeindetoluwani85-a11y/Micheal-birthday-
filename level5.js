document.addEventListener("DOMContentLoaded", () => {

    const introPage = document.getElementById("introPage");
    const lettersPage = document.getElementById("lettersPage");

    const startBtn = document.getElementById("startBtn");

    const popup = document.getElementById("questionPopup");

    const letters = document.querySelectorAll(".letter");

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

    letters.forEach(letter => {

        letter.addEventListener("click", () => {

            popup.classList.remove("hidden");

        });

    });

});
