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
const continueBtn = document.getElementById("continueLevel3");
const responseText = document.getElementById("jokeResponse");

/* =========================
STATE
========================= */
let currentIndex = 0;
let progress = 0;

/* =========================
MEMORIES
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
      "At first I wasn’t really sure if you meant all the “I love you”s you kept saying, but now I know you meant every one of them. ❤️"
  },
  {
    question: "What food do we always argue about?",
    options: ["Rice and beans", "Indomie", "Bread and stew"],
    correct: 1,
    image: "images/3664A4B4-AB7C-42B1-BD70-09B1C04D6641.jpeg",
    message:
      "We both know Indomie is better. 🙄😂❤️"
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
LOADING
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
MEMORY SELECT
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
    btn.classList.add("option");
    btn.textContent = opt;
    btn.dataset.index = i;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });

    optionContainer.appendChild(btn);
  });
}

/* =========================
SUBMIT ANSWER
========================= */
document.getElementById("submitAnswer").addEventListener("click", () => {
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
});

/* =========================
REVEAL
========================= */
function showReveal(memory) {
  hide(questionPage);
  show(memoryReveal);

  const memoryImage = document.getElementById("memoryImage");
  const memoryMessage = document.getElementById("memoryMessage");
  const nextBtn = document.getElementById("nextMemory");

  memoryImage.style.display = "block";
  memoryMessage.style.display = "block";

  memoryImage.src = memory.image;
  memoryMessage.textContent = memory.message;

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
  }
}

/* =========================
LEVEL 3 CONNECT
========================= */
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    hide(jokePage);
    show(level3Page);
  });
}

/* =========================
JOKE SYSTEM (SAFE)
========================= */
if (responseText) {
  responseText.style.display = "none";
}

document.querySelectorAll(".jokeOption").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.dataset.answer;

    if (!responseText) return;

    responseText.style.display = "block";

    responseText.textContent =
      answer === "yes"
        ? "Correct 😌"
        : "think again🙄";
  });
});

});
