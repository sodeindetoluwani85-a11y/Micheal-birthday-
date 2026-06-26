// ================================
// LEVEL 1 SCRIPT - PART 1
// ================================
// Questions
const questions = [
{
question: "What's her favorite snack?",
answers: ["Chickwizz", "Ice Cream", "Cinnamon Rolls"],
correct: 0
},
{
question: "What's my favorite thing to do?",
answers: ["Sleep", "Watch Movies", "Listen to Music", "All of the Above"],
correct: 3
},
{
question: "Do I prefer wearing shorts or skirts?",
answers: ["Shorts", "Skirts"],
correct: 0
}
];
// Elements
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const popup = document.getElementById("popup");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const finishScreen = document.getElementById("finishScreen");
const hearts = document.querySelectorAll(".heart");
// Music
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusic");
let currentQuestion = 0;
let answered = [false, false, false];
let score = 0;
// --------------------
// Music
// --------------------
playBtn.addEventListener("click", () => {
if(music.paused){
music.play();
playBtn.innerHTML = "⏸ Pause Lover Girl";
}else{
music.pause();
playBtn.innerHTML = "▶ Play Lover Girl";
}
});
// --------------------
// Load Question
// --------------------
function loadQuestion(){
popup.innerHTML = "";
nextBtn.disabled = true;
const q = questions[currentQuestion];
questionEl.innerHTML = q.question;
answersEl.innerHTML = "";
q.answers.forEach((answer,index)=>{
const button=document.createElement("button");
button.className="answer";
button.innerHTML=answer;
button.onclick=()=>checkAnswer(button,index);
answersEl.appendChild(button);
});
updateHearts();
}
// --------------------
// Hearts
// --------------------
function updateHearts(){
hearts.forEach((heart,index)=>{
if(index<currentQuestion){
heart.classList.add("active");
}else{
heart.classList.remove("active");
}
});
}
// Start
loadQuestion();
// ================================
// LEVEL 1 SCRIPT - PART 2
// ================================
// Check Answer
function checkAnswer(button, selectedIndex) {
    // Prevent answering twice
    if (answered[currentQuestion]) return;
    const correctIndex = questions[currentQuestion].correct;
    if (selectedIndex === correctIndex) {
        answered[currentQuestion] = true;
        score++;
        button.style.background = "#d4ffd6";
        button.style.border = "2px solid #53b86b";
        popup.innerHTML =
        "<div class='popupSuccess'>💖 Yay!! You know me after all. ❤️</div>";
        nextBtn.disabled = false;
        // Automatically move to the next question after 1.5 seconds
        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                currentQuestion++;
                loadQuestion();
            }, 1500);
        } else {
            // Last question
            setTimeout(() => {
                finishQuiz();
            }, 1800);
        }
    } else {
        // Wrong answer animation
        button.classList.add("shake");
        popup.innerHTML =
        "<div class='popupWrong'>💌 Hmm... are you sure about that?<br>Try again. 😭❤️</div>";
        setTimeout(() => {
            button.classList.remove("shake");
        }, 500);
    }
}
// --------------------
// NEXT BUTTON
// --------------------
nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});
// --------------------
// BACK BUTTON
// --------------------
backBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});// ================================
// LEVEL 1 SCRIPT - PART 3
// ================================
// Finish Quiz
function finishQuiz() {
    // Fill all hearts
    hearts.forEach(heart => {
        heart.classList.add("active");
    });
    // Small celebration
    popup.innerHTML =
    "<div class='popupSuccess'>🎉 Congratulations! You made it to Level 2 ❤️</div>";
    setTimeout(() => {
        finishScreen.style.display = "flex";
    }, 1800);
}
// --------------------
// LEVEL 2 BUTTON
// --------------------
const level2Btn = document.getElementById("level2");
if (level2Btn) {
    level2Btn.addEventListener("click", () => {
        window.location.href = "level2.html";
    });
}
// --------------------
// Simple Floating Hearts
// --------------------
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 15) + "px";
    heart.style.pointerEvents = "none";
    heart.style.opacity = "0.8";
    heart.style.transition = "transform 5s linear, opacity 5s linear";
    heart.style.zIndex = "999";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 50);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 1800);
// --------------------
// Keyboard Navigation (Desktop)
// --------------------
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && !nextBtn.disabled) {
        nextBtn.click();
    }
    if (e.key === "ArrowLeft") {
        backBtn.click();
    }
});
// ================================
// END OF SCRIPT
// ================================
const level2Btn = document.getElementById("level2");

if (level2Btn) {
    level2Btn.addEventListener("click", () => {
        window.location.href = "level2.html";
    });
}
