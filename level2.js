document.addEventListener("DOMContentLoaded", () => {

/* =========================
SCREENS
========================= */
const loadingScreen = document.getElementById("loadingScreen");
const memoryHome = document.getElementById("memoryHome");
const questionPage = document.getElementById("questionPage");
const memoryReveal = document.getElementById("memoryReveal");
const finishPage = document.getElementById("finishPage");
const jokePage = document.getElementById("jokePage");
const level3Page = document.getElementById("level3Page");

/* =========================
STATE
========================= */
let currentIndex = 0;
let progress = 0;

/* =========================
MEMORIES DATA
========================= */
const memories = [
  {
    question: "Where did we first meet?",
    options: ["Busa", "CAF", "Emerald"],
    correct: 1,
    image: "images/IMG_4384.jpeg",
    message:
      "I remember walking with Nonso and when we met you I was saying in my head, “Hmm this boy is fine o.” 🤣 I just really liked how goofy you were. ❤️"
  },
  {
    question: "What was our first date?",
    options: ["Ice cream date", "Dinner date", "Movie date"],
    correct: 2,
    image: "images/0CFF270A-A66A-4C73-A2E0-4F30A3233499.jpeg",
    message:
      "I had the best date with you that day. 🥹 I really had so much fun. ❤️"
  },
  {
    question: "Who confessed first?",
    options: ["You", "Me"],
    correct: 0,
    image: "images/IMG_3653.jpeg",
    message:
      "At first I wasn’t sure if you meant it… but now I know you did. ❤️"
  },
  {
    question: "What food do we always argue about?",
    options: ["Rice and beans", "Indomie", "Bread and stew"],
    correct: 1,
    image: "images/3664A4B4-AB7C-42B1-BD70-09B1C04D6641.jpeg",
    message:
      "We both know Indomie wins 🙄😂❤️"
  }
];

/* =========================
HELPERS
========================= */
function show(el) {
  if (el) el.style.display = "block";
}

function hide(el) {
  if (el) el.style.display = "none";
}

/* =========================
LOADING SCREEN (FIXED)
========================= */
const bar = document.getElementById("loadingProgress");
const percent = document.getElementById("loadingPercent");

function startLoading() {
  const interval = setInterval(() => {
    progress++;

    if (bar) bar.style.width = progress + "%";
    if (percent) percent.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      hide(loadingScreen);
      show(memoryHome);
    }
  }, 20);
}

startLoading();

/* =========================
MEMORY SELECTION
========================= */
document.querySelectorAll(".memorySelect").forEach(btn => {
  btn.addEventListener("click", () => {
    openQuestion(Number(btn.dataset.memory));
  });
});

function openQuestion(index) {
  currentIndex = index;

  hide(memoryHome);
  show(questionPage);

  const memory = memories[index];
  const questionTitle = document.getElementById("questionTitle");
  const optionContainer = document.getElementById("optionContainer");

  questionTitle.textContent = memory.question;
  optionContainer.innerHTML = "";

  memory.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.dataset.index = i;

    btn.onclick = () => {
      document.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };

    optionContainer.appendChild(btn);
  });
}

/* =========================
SUBMIT ANSWER
========================= */
const submitBtn = document.getElementById("submitAnswer");

if (submitBtn) {
  submitBtn.onclick = () => {
    const selected = document.querySelector(".option.selected");
    if (!selected) return;

    const answer = Number(selected.dataset.index);
    const memory = memories[currentIndex];

    if (answer === memory.correct) {
      showReveal(memory);
    } else {
      selected.classList.add("wrong");
      setTimeout(() => selected.classList.remove("wrong"), 500);
    }
  };
}

/* =========================
REVEAL SCREEN
========================= */
function showReveal(memory) {
  hide(questionPage);
  show(memoryReveal);

  const img = document.getElementById("memoryImage");
  const msg = document.getElementById("memoryMessage");
  const nextBtn = document.getElementById("nextMemory");

  img.src = memory.image;
  msg.textContent = memory.message;

  img.style.display = "block";
  msg.style.display = "block";

  nextBtn.onclick = nextMemory;
}

/* =========================
NEXT MEMORY
========================= */
function nextMemory() {
  hide(memoryReveal);

  currentIndex++;

  if (currentIndex < memories.length) {
    openQuestion(currentIndex);
  } else {
    show(jokePage);
    initJoke();
  }
}

/* =========================
JOKE SYSTEM (TENNESSEE PART)
========================= */
function initJoke() {
  const response = document.getElementById("jokeResponse");
  const continueBtn = document.getElementById("continueLevel3");

  if (!response || !continueBtn) return;

  response.style.display = "none";
  continueBtn.style.display = "none";

  document.querySelectorAll(".jokeOption").forEach(btn => {
    btn.onclick = () => {
      const answer = btn.dataset.answer;

      response.style.display = "block";

      if (answer === "yes") {
        response.textContent = "Correct 😌";
        continueBtn.style.display = "block";
      } else {
        response.textContent = "think again🙄";
        continueBtn.style.display = "none";
      }
    };
  });

  continueBtn.onclick = () => {
    hide(jokePage);
    show(level3Page);
  };
}

});
