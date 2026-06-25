const questions = [
{
question:"What's her favorite snack?",
answers:[
"🍗 Chickwizz",
"🍦 Ice Cream",
"🥐 Cinnamon Rolls"
],
correct:0
},
{
question:"What's my favorite thing to do?",
answers:[
"😴 Sleep",
"🎬 Watch Movies",
"🎵 Listen to Music",
"✨ All of the Above"
],
correct:3
},
{
question:"Do I prefer wearing...",
answers:[
"👗 Skirts",
"🩳 Shorts"
],
correct:1
}
];
let currentQuestion = 0;
let answeredCorrectly = false;
const question = document.getElementById("question");
const answers = document.querySelector(".answers");
const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
loadQuestion();
function loadQuestion(){
answeredCorrectly=false;
nextButton.disabled=true;
message.innerHTML="";
question.innerHTML=questions[currentQuestion].question;
answers.innerHTML="";
questions[currentQuestion].answers.forEach((answer,index)=>{
const btn=document.createElement("button");
btn.className="answer";
btn.innerHTML=answer;
btn.onclick=()=>checkAnswer(index,btn);
answers.appendChild(btn);
});
backButton.style.visibility=currentQuestion===0?"hidden":"visible";
}
function checkAnswer(index,button){
if(answeredCorrectly) return;
if(index===questions[currentQuestion].correct){
answeredCorrectly=true;
button.style.background="#c8ffd3";
button.style.borderColor="#59c96d";
message.innerHTML="🎉 Yay!! You remembered ❤️";
nextButton.disabled=false;
updateProgress();
}else{
button.classList.add("shake");
message.innerHTML="💌 Wrong. I'm disappointed but I still love you. ❤️";
setTimeout(()=>{
button.classList.remove("shake");
},500);
}
}
function goNext(){
if(currentQuestion<questions.length-1){
currentQuestion++;
loadQuestion();
}else{
showFinal();
}
}
function goBack(){
if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}
}
function updateProgress(){
const hearts=document.querySelectorAll(".heart");
hearts[currentQuestion].classList.add("active");
}
function showFinal(){
document.querySelector(".questionCard").innerHTML=`
<h1 style="color:#ff5d8f;text-align:center;">
🎉 Congratulations!!
</h1>
<p style="font-size:24px;text-align:center;margin-top:20px;">
You officially made it to
<strong>Level 2 ❤️</strong>
</p>
<p style="text-align:center;font-size:20px;margin-top:20px;">
Not bad...
Maybe you really do know me after all. 🤍
</p>
<div style="text-align:center;margin-top:40px;">
<button
onclick="location.href='level2.html'"
style="
padding:18px 40px;
font-size:22px;
background:#ff5d8f;
color:white;
border:none;
border-radius:50px;
cursor:pointer;
">
🎮 Proceed to Level 2
</button>
</div>
`;
}
