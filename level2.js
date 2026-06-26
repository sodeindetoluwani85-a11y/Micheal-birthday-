document.addEventListener("DOMContentLoaded", () => {

/* =========================
MEMORIES DATA
========================= */
const memories = [
  {
    question: "Where did we first meet?",
    options: ["Busa", "CAF", "Emerald"],
    correct: 1,
    image: "IMG_4384.jpeg",
    message:
      "I remember walking with Nonso and when we met you I was saying in my head, “Hmm this boy is fine o.” 🤣 I just really liked how goofy you were. ❤️"
  },
  {
    question: "What was our first date?",
    options: ["Ice cream date", "Dinner date", "Movie date"],
    correct: 2,
    image: "0CFF270A-A66A-4C73-A2E0-4F30A3233499.jpeg",
    message:
      "I had the best date with you that day. 🥹 I really had so much fun. ❤️"
  },
  {
    question: "Who confessed first?",
    options: ["You", "Me"],
    correct: 0,
    image: "IMG_3653.jpeg",
    message:
      "At first I wasn’t really sure if you meant all the “I love you”s you kept saying, but now I know you meant every one of them. ❤️"
  },
  {
    question: "What food do we always argue about?",
    options: ["Rice and beans", "Indomie", "Bread and stew"],
    correct: 1,
    image: "3664A4B4-AB7C-42B1-BD70-09B1C04D6641.jpeg",
    message:
      "We both know Indomie is better. 🙄😂❤️"
  }
];

/* =========================
ELEMENTS
========================= */
const loadingScreen = document.getElementById("loadingScreen");
const memoryHome = document.getElementById("memoryHome");
const questionPage = document.getElementById("questionPage");
const memoryReveal = document.getElementById("memoryReveal");
const finishPage = document.getElementById("finishPage");

const questionTitle = document.getElementById("questionTitle");
const optionContainer = document.getElementById("optionContainer");
const memoryImage = document.getElementById("memoryImage");
const memoryMessage = document.getElementById("memoryMessage");
const nextBtn = document.getElementById("nextMemory");

/* =========================
STATE
========================= */
let currentIndex = 0;

/* =========================
LOADING SCREEN
========================= */
let progress = 0;
const bar = document.getElementById("loadingProgress");
const percent = document.getElementById("loadingPercent");

function startLoading() {
  const interval = setInterval(() => {
    progress += 2;

    if (bar) bar.style.width = progress + "%";
    if (percent) percent.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      loadingScreen.classList.add("hidden");
      memoryHome.classList.remove("hidden");
    }
  }, 20);
}

startLoading();

/* =========================
OPEN QUESTION (HOME → QUESTION)
========================= */
document.querySelectorAll(".memorySelect").forEach(btn => {
  btn.addEventListener("click", () => {
    openQuestion(Number(btn.dataset.memory));
  });
});

function openQuestion(index) {
  currentIndex = index;

  memoryHome.classList.add("hidden");
  questionPage.classList.remove("hidden");

  const memory = memories[index];

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

  if (!selected) {
    shake(document.getElementById("submitAnswer"));
    return;
  }

  const answer = Number(selected.dataset.index);
  const memory = memories[currentIndex];

  if (answer === memory.correct) {
    showReveal(memory);
    spawnHearts();
  } else {
    selected.classList.add("wrong");
    setTimeout(() => selected.classList.remove("wrong"), 500);
  }
});

/* =========================
REVEAL SCREEN
========================= */
function showReveal(memory) {
  questionPage.classList.add("hidden");
  memoryReveal.classList.remove("hidden");

  memoryImage.style.display = "block";
  memoryMessage.style.display = "block";

  memoryImage.src = memory.image;

  typeText(memoryMessage, memory.message);

  nextBtn.onclick = nextMemory;
}

/* =========================
NEXT MEMORY
========================= */
function nextMemory() {
  memoryReveal.classList.add("hidden");

  const next = currentIndex + 1;

  if (next < memories.length) {
    openQuestion(next);
  } else {
    finishPage.classList.remove("hidden");
  }
}

/* =========================
TYPEWRITER EFFECT
========================= */
function typeText(el, text) {
  el.textContent = "";
  let i = 0;

  const typing = setInterval(() => {
    el.textContent += text[i];
    i++;

    if (i >= text.length) clearInterval(typing);
  }, 20);
}

/* =========================
HEART EFFECT
========================= */
function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.fontSize = "18px";
    heart.style.animation = "floatUp 2s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* =========================
SHAKE EFFECT
========================= */
function shake(el) {
  el.style.transform = "translateX(-5px)";
  setTimeout(() => (el.style.transform = "translateX(5px)"), 100);
  setTimeout(() => (el.style.transform = "translateX(0)"), 200);
}

/* =========================
BACK BUTTONS
========================= */
document.getElementById("backHome").onclick = () => {
  questionPage.classList.add("hidden");
  memoryHome.classList.remove("hidden");
};

document.getElementById("backQuestion").onclick = () => {
  questionPage.classList.add("hidden");
  memoryHome.classList.remove("hidden");
};

});
