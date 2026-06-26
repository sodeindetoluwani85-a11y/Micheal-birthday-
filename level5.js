document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // PAGE ELEMENTS
    // ==========================

    const introPage = document.getElementById("introPage");
    const lettersPage = document.getElementById("lettersPage");
    const startBtn = document.getElementById("startChallenge");

    // ==========================
    // START BUTTON
    // ==========================

    startBtn.addEventListener("click", () => {

        // Hide intro
        introPage.classList.add("hidden");

        // Show letters page
        lettersPage.classList.remove("hidden");

    });

});
