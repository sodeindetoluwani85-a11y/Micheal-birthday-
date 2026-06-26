document.addEventListener("DOMContentLoaded", () => {

const reasons = [
`Your dad jokes😭, sometimes they actually make me laugh but I'll never say this again😭`,

`I love how goofy you are and how you always try to make me do things that'll get rid of my anxiety🥹, even if it involves shouting "I'm a goat" before entering amphi😭`,

`I love how intentional and gentle you are with me❤️`,

`I love how you always try to find a "fix" for every problem I have, even though you know you can't do much sometimes🥹`
];

// Elements
const envelopes = document.querySelectorAll(".envelope");
const overlay = document.getElementById("letterOverlay");
const letterText = document.getElementById("letterText");
const closeBtn = document.getElementById("closeLetter");
const finishedMessage = document.getElementById("finishedMessage");
const goLevel4 = document.getElementById("goLevel4");

// Make sure popup starts hidden
overlay.style.display = "none";

let opened = 0;

envelopes.forEach((envelope, index) => {

    envelope.addEventListener("click", () => {

        // Prevent opening the same envelope twice
        if (envelope.classList.contains("opened")) {

            overlay.style.display = "flex";
            letterText.textContent = reasons[index];
            return;
        }

        envelope.classList.add("opened");

        letterText.textContent = reasons[index];

        overlay.style.display = "flex";

        opened++;

    });

});

// Close popup
closeBtn.addEventListener("click", () => {

    overlay.style.display = "none";

    if (opened === reasons.length) {

        finishedMessage.classList.remove("hidden");

    }

});

// Go to Level 4
goLevel4.addEventListener("click", () => {

    window.location.href = "level4.html";

});

});
