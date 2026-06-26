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
