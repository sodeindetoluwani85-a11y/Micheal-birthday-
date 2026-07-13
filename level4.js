document.addEventListener("DOMContentLoaded", () => {

const introPage = document.getElementById("introPage");
const certificatePage = document.getElementById("certificatePage");

const revealAward = document.getElementById("revealAward");
const certificate = document.getElementById("certificate");

const nextLevel = document.getElementById("nextLevel");
const confettiContainer = document.getElementById("confettiContainer");

/* ---------- Reveal Certificate ---------- */
revealAward.addEventListener("click", () => {

    introPage.classList.add("hidden");

    certificatePage.classList.remove("hidden");

    requestAnimationFrame(() => {

        certificate.classList.add("show");

        launchConfetti();

        addSparkles();

    });

});
------ Continue ---------- */

nextLevel.addEventListener("click", () => {

    window.location.href = "level5.html";

});

/* ---------- Confetti ---------- */

function launchConfetti(){

    const emojis = ["🎉","🎊","✨","💖","🌸","💛"];

    for(let i=0;i<80;i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.textContent = emojis[Math.floor(Math.random()*emojis.length)];

        piece.style.left = Math.random()*100 + "%";

        piece.style.animationDelay = Math.random()*2 + "s";

        piece.style.fontSize = (18 + Math.random()*16) + "px";

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}

/* ---------- Sparkles ---------- */

function addSparkles(){

    for(let i=0;i<20;i++){

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.textContent = "✨";

        sparkle.style.left = Math.random()*90 + "%";

        sparkle.style.top = Math.random()*90 + "%";

        sparkle.style.animationDelay = Math.random()*2 + "s";

        certificate.appendChild(sparkle);

    }

}

});
