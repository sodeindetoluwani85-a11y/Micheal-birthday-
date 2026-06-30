document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTS
    ========================== */

    const introPage = document.getElementById("introPage");
    const lettersPage = document.getElementById("lettersPage");

    const startBtn = document.getElementById("startBtn");

    const popup = document.getElementById("questionPopup");

    const letters = document.querySelectorAll(".letter");

    const questionText = document.getElementById("questionText");
    const options = document.getElementById("options");
    const responseMessage = document.getElementById("responseMessage");
    const submitBtn = document.getElementById("submitBtn");
    const letterOnePage = document.getElementById("letterOnePage");
const letterTwoPage = document.getElementById("letterTwoPage");
const letterThreePage = document.getElementById("letterThreePage");
   const backFromLetterOne = document.getElementById("backFromLetterOne"); 
    const backFromLetterTwo = document.getElementById("backFromLetterTwo");
    const finalPage = document.getElementById("finalPage");
const finishButton = document.getElementById("finishButton");
    const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const coupon = document.getElementById("coupon");
const couponTitle = document.getElementById("couponTitle");
const continueButton = document.getElementById("continueButton");
const wheelPage = document.getElementById("wheelPage");

    /* ==========================
       QUESTIONS
    ========================== */
const questions = [

    {
        question: "When is your birthday? 🤨<br>(Don't check your phone🙄)",

        options: [
            "12th July",
            "13th July",
            "14th July",
            "16th July"
        ],

        answer: 2,

        correct: "🤣 I'm surprised you actually know this one.",

        wrong: "EXCUSE ME?? IT'S YOUR BIRTHDAY!😭"

    },

    {
        question: "When is our anniversary? ❤️",

        options: [
            "December 18",
            "February 16",
            "30th of March",
            "31st of March"
        ],

        answer: 3,

        correct: "good atleast I don’t have to remind you every year😂❤️",

        wrong: "should I be worried?🤨"

    },

    {
        question: "The first time I said “I love you”❤️",

        options: [
            "28th of March",
            "31st of March",
            "20th of March",
            "23rd of March"
        ],

        answer: 3,

        correct: "okay you passed barely😂❤️",

        wrong: "I’m pretending I didn’t just see that answer😭 try again"

    }

];
    
    let currentQuestion = 0;
    let selectedAnswer = null;

    /* ==========================
       START PAGE
    ========================== */

    lettersPage.style.display = "none";

    startBtn.addEventListener("click", () => {

        introPage.style.display = "none";

        lettersPage.style.display = "flex";

    });

    /* ==========================
       OPEN FIRST LETTER
    ========================== */

    letters.forEach((letter,index)=>{

    letter.addEventListener("click",()=>{

        currentQuestion=index;

        popup.classList.remove("hidden");

        responseMessage.textContent="";

        selectedAnswer=null;

        questionText.innerHTML=questions[index].question;

        options.innerHTML="";

        questions[index].options.forEach((choice,i)=>{

            const button=document.createElement("button");

            button.className="option";

            button.textContent=choice;

            button.addEventListener("click",()=>{

                document.querySelectorAll(".option").forEach(btn=>{

                    btn.classList.remove("selected");

                });

                button.classList.add("selected");

                selectedAnswer=i;

            });

            options.appendChild(button);

        });

    });

});
    /* ==========================
       SUBMIT
    ========================== */

    submitBtn.addEventListener("click", () => {

        if (selectedAnswer === null) {

            responseMessage.textContent = "Choose an answer first🥹";

            return;

        }

        if (selectedAnswer === questions[currentQuestion].answer) {

          responseMessage.textContent =
questions[currentQuestion].correct;
setTimeout(() => {

    popup.classList.add("hidden");

    letters[currentQuestion]
        .querySelector(".lock")
        .textContent = "🔓";

    letters[currentQuestion].classList.add("opened");

    lettersPage.style.display = "none";

    if(currentQuestion === 0){

        letterOnePage.classList.remove("hidden");

    }

    else if(currentQuestion === 1){

        letterTwoPage.classList.remove("hidden");

    }

    else if(currentQuestion === 2){

        letterThreePage.classList.remove("hidden");

    }

},1000);
        }

        else {

            responseMessage.textContent =
            questions[currentQuestion].wrong;

        }

    });

});
backFromLetterOne.addEventListener("click", () => {

    letterOnePage.classList.add("hidden");

    lettersPage.style.display = "flex";

    letters[0].style.pointerEvents = "none";

    letters[0].style.opacity = "0.7";

});
backFromLetterTwo.addEventListener("click", () => {

    letterTwoPage.classList.add("hidden");

    lettersPage.style.display = "flex";

    letters[1].style.pointerEvents = "none";

    letters[1].style.opacity = "0.7";

});
finishButton.addEventListener("click", () => {

    letterThreePage.classList.add("hidden");

    finalPage.classList.remove("hidden");

});
const prizes = [

    "🤗 Free Hug Coupon",

    "💋 Free Kiss Coupon",

    "🍿 Movie Night Coupon",

    "🙈 One Free Apology From Me",

    "😌 One Free Apology From You",

    "🤣 Punishment"

];

let currentRotation = 0;

spinButton.addEventListener("click", () => {

    spinButton.disabled = true;

    coupon.classList.add("hidden");

    continueButton.classList.add("hidden");

    const randomIndex = Math.floor(Math.random() * prizes.length);

    const sliceAngle = 360 / prizes.length;

    const extraSpins = 5;

    const rotation =
        (extraSpins * 360) +
        (360 - (randomIndex * sliceAngle) - (sliceAngle / 2));

    currentRotation += rotation;

    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {

        couponTitle.textContent = prizes[randomIndex];

        coupon.classList.remove("hidden");

        continueButton.classList.remove("hidden");

        spinButton.disabled = false;

    }, 4000);

});
