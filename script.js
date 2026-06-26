// ======================================
// LEVEL 1 - RELATIONSHIP QUIZ
// ======================================

// Questions

const questions = [

{
    question: "What's her favorite snack?",
    answers: ["Chickwizz", "Ice Cream", "Cinnamon Rolls"],
    correct: 0
},

{
    question: "What's my favorite thing to do?",
    answers: [
        "Sleep",
        "Watch Movies",
        "Listen to Music",
        "All of the Above"
    ],
    correct: 3
},

{
    question: "Do I prefer wearing shorts or skirts?",
    answers: ["Shorts", "Skirts"],
    correct: 0
}

];

// ======================
// Elements
// ======================

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const popup = document.getElementById("popup");

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

const finishScreen = document.getElementById("finishScreen");
const level2Btn = document.getElementById("level2");

const hearts = document.querySelectorAll(".heart");

const music = document.getElementById("bgMusic");
const playMusic = document.getElementById("playMusic");

// ======================

let currentQuestion = 0;
let selectedAnswer = -1;

// ======================
// MUSIC
// ======================

playMusic.onclick = () => {

    if (music.paused) {

        music.play();

        playMusic.innerHTML = "⏸ Pause Lover Girl";

    } else {

        music.pause();

        playMusic.innerHTML = "▶ Play Lover Girl";

    }

};

// ======================
// LOAD QUESTION
// ======================

function loadQuestion() {

    popup.innerHTML = "";

    selectedAnswer = -1;

    const q = questions[currentQuestion];

    question.innerHTML = q.question;

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.innerHTML = answer;

        button.onclick = () => {

            document
                .querySelectorAll(".answer")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            selectedAnswer = index;

        };

        answers.appendChild(button);

    });

    updateHearts();

}

loadQuestion();
// ======================================
// CHECK ANSWER
// ======================================

function checkAnswer(button, index){

    if(selectedAnswer !== index) return;

    const correct = questions[currentQuestion].correct;

    if(index === correct){

        button.style.background = "#d8ffd8";
        button.style.border = "2px solid #5ec46e";

        popup.innerHTML = `
        <div class="successNote">
            💖 Yay! You actually pay attention.
        </div>
        `;

        nextBtn.disabled = false;

    }

    else{

        button.classList.add("shake");

        popup.innerHTML = `
        <div class="wrongNote">
            💌 Hmm... are you sure about that?<br>
            Try again. 😭❤️
        </div>
        `;

        setTimeout(()=>{

            button.classList.remove("shake");

        },500);

    }

}

// ======================================
// NEXT BUTTON
// ======================================

nextBtn.onclick = ()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();

    }

    else{

        finishQuiz();

    }

};

// ======================================
// BACK BUTTON
// ======================================

backBtn.onclick = ()=>{

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

    }

};

// ======================================
// HEART PROGRESS
// ======================================

function updateHearts(){

    hearts.forEach((heart,index)=>{

        if(index <= currentQuestion){

            heart.classList.add("active");

        }

        else{

            heart.classList.remove("active");

        }

    });

}
// ======================================
// FINISH QUIZ
// ======================================

function finishQuiz(){

    finishScreen.style.display = "flex";

}

// ======================================
// LEVEL 2 BUTTON
// ======================================

level2Btn.onclick = ()=>{

    window.location.href = "level2.html";

};

// ======================================
// FLOATING HEARTS
// ======================================

setInterval(()=>{

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (18 + Math.random()*12) + "px";

    heart.style.pointerEvents = "none";

    heart.style.transition = "4s linear";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },4000);

},1500);
