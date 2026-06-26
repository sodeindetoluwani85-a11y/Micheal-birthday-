// ===============================
// MEMORY LANE - LEVEL 2
// ===============================

// Questions

const memories = [

{

question:"First place we met?",

answers:["Busa","CAF","Emerald"],

correct:1,

image:"images/IMG_4384.jpeg",

message:"I remember walking with Nonso and when we met you I was saying in my head 'Hmm this boy is fine o'🤣. I just really liked how goofy you were. ❤️"

},

{

question:"First date?",

answers:["Icecream Date","Dinner Date","Movie Date"],

correct:2,

image:"images/0CFF270A-A66A-4C73-A2E0-4F30A3233499.jpeg",

message:"I had the best date with you that day🥹. I really had so much fun❤️"

},

{

question:"Who confessed first?",

answers:["Me","You"],

correct:1,

image:"images/IMG_3653.jpeg",

message:"At first I wasn't really sure if you meant all the 'I love you's' you kept saying, but now I know you meant them❤️"

},

{

question:"What food do we always argue about?",

answers:["Rice and Beans","Indomie","Bread and Stew"],

correct:1,

image:"images/3664A4B4-AB7C-42B1-BD70-09B1C04D6641.jpeg",

message:"We both know Indomie is better🙄❤️"

}

];

// Elements

const loadingScreen=document.getElementById("loadingScreen");

const mainPage=document.getElementById("mainPage");

const questionText=document.getElementById("questionText");

const answers=document.getElementById("answers");

const submitBtn=document.getElementById("submitBtn");

const wrongNote=document.getElementById("wrongNote");

const memoryReveal=document.getElementById("memoryReveal");

const memoryPhoto=document.getElementById("memoryPhoto");

const memoryText=document.getElementById("memoryText");

const nextBtn=document.getElementById("nextBtn");

const currentQuestion=document.getElementById("currentQuestion");

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let questionIndex=0;

let selectedAnswer=-1;

// Loading Screen

window.onload=()=>{

setTimeout(()=>{

loadingScreen.style.display="none";

mainPage.style.display="block";

loadQuestion();

},3000);

};

// Music Button

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicBtn.innerHTML="🎵 Lover Girl";

}

};

// Load Question

function loadQuestion(){

const q=memories[questionIndex];

currentQuestion.innerHTML=questionIndex+1;

questionText.innerHTML=q.question;

answers.innerHTML="";

selectedAnswer=-1;

wrongNote.style.display="none";

memoryReveal.classList.remove("show");

q.answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.className="answer";

btn.innerHTML=answer;

btn.onclick=()=>{

document.querySelectorAll(".answer").forEach(b=>b.classList.remove("selected"));

btn.classList.add("selected");

selectedAnswer=index;

};

answers.appendChild(btn);

});

}
// =====================================
// CHECK ANSWER
// =====================================

submitBtn.onclick = () => {

    if (selectedAnswer === -1) {

        alert("Choose an answer first ❤️");

        return;

    }

    const correct = memories[questionIndex].correct;

    if (selectedAnswer === correct) {

        wrongNote.style.display = "none";

        // Show memory

        memoryPhoto.src = memories[questionIndex].image;

        memoryText.innerHTML = memories[questionIndex].message;

        memoryReveal.classList.add("show");

        // Disable answering again
        document.querySelectorAll(".answer").forEach(btn => {

            btn.disabled = true;

        });

        submitBtn.style.display = "none";

    }

    else {

        wrongNote.style.display = "block";

        const selectedBtn =
        document.querySelectorAll(".answer")[selectedAnswer];

        selectedBtn.classList.add("wiggle");

        setTimeout(() => {

            selectedBtn.classList.remove("wiggle");

        },500);

    }

};

// =====================================
// NEXT MEMORY
// =====================================

nextBtn.onclick = () => {

    questionIndex++;

    if(questionIndex < memories.length){

        submitBtn.style.display = "inline-block";

        loadQuestion();

    }

    else{

        mainPage.style.display="none";

        finishScreen.style.display="flex";

    }

};

// =====================================
// LEVEL 3 BUTTON
// =====================================

const level3Btn = document.getElementById("level3Btn");

level3Btn.onclick = () => {

    window.location.href = "level3.html";

};

// =====================================
// BACK BUTTON
// =====================================

document.getElementById("backBtn").onclick = () => {

    window.location.href = "level1.html";

};
