document.addEventListener("DOMContentLoaded", () => {

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
SCREENS
========================= */
const loadingScreen = document.getElementById("loadingScreen");
const memoryHome = document.getElementById("memoryHome");
const questionPage = document.getElementById("questionPage");
const memoryReveal = document.getElementById("memoryReveal");
const finishPage = document.getElementById("finishPage");

/* =========================
QUESTION ELEMENTS
========================= */
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
FORCE SHOW/HIDE (NO CSS RELIANCE)
========================= */
function show(el) {
  el.style.display = "block";
}

function hide(el) {
  el.style.display = "none";
}

/* =========================
LOADING SCREEN (ROBUST)
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

      console.log("Loading finished");

      hide(loadingScreen);
      show(memoryHome);
    }
  }, 20);
}

startLoading();

/* =========================
OPEN MEMORY QUESTION
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
  hide(questionPage);
  show(memoryReveal);

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
  hide(memoryReveal);

  currentIndex++;

  if (currentIndex < memories.length) {
    openQuestion(currentIndex);
  } else {
    document.getElementById("jokePage").classList.remove("hidden");
  }
}

/* =========================
TYPEWRITER
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
HEARTS
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
SHAKE
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
  hide(questionPage);
  show(memoryHome);
};

document.getElementById("backQuestion").onclick = () => {
  hide(questionPage);
  show(memoryHome);
};
  const continueBtn = document.getElementById("continueLevel3");

if (continueBtn) {
  continueBtn.addEventListener("click", () => {

    const jokePage = document.getElementById("jokePage");
    const level3Page = document.getElementById("level3Page");

    if (jokePage) jokePage.classList.add("hidden");
    if (level3Page) level3Page.classList.remove("hidden");

  });
}

const continueBtn = document.getElementById("continueLevel3");
const responseText = document.getElementById("jokeResponse");

// ensure hidden at start
responseText.style.display = "none";

document.querySelectorAll(".jokeOption").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.dataset.answer;

    // show response ONLY after click
    responseText.style.display = "block";

    if (answer === "yes") {
      responseText.textContent = "Correct 😌";
      continueBtn.style.display = "block";
    }

    if (answer === "no") {
      responseText.textContent = "think again🙄";
      continueBtn.style.display = "none";
    }
  });
});

continueBtn.onclick = () => {
  window.location.href = "level3.html";
};
      
});
