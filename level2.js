// ================================
// LEVEL 2 - MEMORY LANE
// ================================

// Questions and Memories

const memories = [

{

question:"First place we met?",

answers:["Busa","CAF","Emerald"],

correct:1,

image:"images/IMG_4384.jpeg",

text:"I remember walking with Nonso and when we met you I was saying in my head 'hmm this boy is fine o' 🤣. I just really liked how goofy you were. ❤️"

},

{

question:"First date?",

answers:["Icecream Date","Dinner Date","Movie Date"],

correct:2,

image:"images/0CFF270A-A66A-4C73-A2E0-4F30A3233499.jpeg",

text:"I had the best date with you that day🥹. I really had so much fun❤️"

},

{

question:"Who confessed first?",

answers:["Me","You"],

correct:1,

image:"images/IMG_3653.jpeg",

text:"At first I wasn't really sure if you meant all the 'I love you's' you were saying, but now I know you meant them❤️"

},

{

question:"What food do we always argue about?",

answers:["Rice and Beans","Indomie","Bread and Stew"],

correct:1,

image:"images/3664A4B4-AB7C-42B1-BD70-09B1C04D6641.jpeg",

text:"We both know Indomie is better🙄❤️"

}

];

let current = 0;

// Elements

const loadingScreen=document.getElementById("loadingScreen");

const mainPage=document.getElementById("mainPage");

const question=document.getElementById("question");

const answers=document.getElementById("answers");

const popup=document.getElementById("popup");

const memoryCard=document.getElementById("memoryCard");

const memoryImage=document.getElementById("memoryImage");

const memoryText=document.getElementById("memoryText");

const nextMemory=document.getElementById("nextMemory");

const circles=document.querySelectorAll(".circle");

const finishScreen=document.getElementById("finishScreen");

const music=document.getElementById("bgMusic");

const playMusic=document.getElementById("playMusic");

// Loading Screen

window.onload=()=>{

setTimeout(()=>{

loadingScreen.style.display="none";

mainPage.style.display="block";

loadQuestion();

},3000);

};

// Music Button

playMusic.addEventListener("click",()=>{

if(music.paused){

music.play();

playMusic.innerHTML="⏸ Pause Lover Girl";

}else{

music.pause();

playMusic.innerHTML="🎵 Play Lover Girl";

}

});

// Load Question

function loadQuestion(){

memoryCard.classList.remove("show");

popup.innerHTML="";

const q=memories[current];

question.innerHTML=q.question;

answers.innerHTML="";

q.answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.className="answer";

btn.innerHTML=answer;

btn.onclick=()=>checkAnswer(index,btn);

answers.appendChild(btn);

});

updateProgress();

}
// ================================
// PART 2 - ANSWERS & MEMORY REVEAL
// ================================

function checkAnswer(index, button){

const correct = memories[current].correct;

if(index === correct){

button.classList.add("correct");

popup.innerHTML="<div class='popupSuccess'>💖 Memory unlocked!</div>";

setTimeout(()=>{

showMemory();

},800);

}else{

button.classList.add("wrong");

popup.innerHTML="<div class='popupWrong'>💌 Hmm... are you sure about that?<br>Try again. 😭❤️</div>";

setTimeout(()=>{

button.classList.remove("wrong");

},500);

}

}

// ================================
// SHOW MEMORY
// ================================

function showMemory(){

const m = memories[current];

memoryImage.src = m.image;

memoryText.innerHTML = m.text;

memoryCard.classList.add("show");

}

// ================================
// NEXT MEMORY
// ================================

nextMemory.addEventListener("click",()=>{

current++;

if(current < memories.length){

loadQuestion();

}else{

finishQuiz();

}

});

// ================================
// PROGRESS
// ================================

function updateProgress(){

circles.forEach((circle,index)=>{

if(index <= current){

circle.classList.add("active");

}else{

circle.classList.remove("active");

}

});

}

// ================================
// FINISH QUIZ
// ================================

function finishQuiz(){

document.querySelector(".questionCard").style.display="none";

memoryCard.style.display="none";

finishScreen.style.display="flex";

}

// ================================
// LEVEL 3 BUTTON
// ================================

const level3Button=document.getElementById("level3Button");

level3Button.addEventListener("click",()=>{

window.location.href="level3.html";

});
