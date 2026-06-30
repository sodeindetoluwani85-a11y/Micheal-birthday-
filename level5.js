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

        }
,
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
