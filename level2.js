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
      "At first I wasn’t sure if you meant it… but now I know every word was real. ❤️"
  },
  {
    question: "What food do we always argue about?",
    options: ["Rice and beans", "Indomie", "Bread and stew"],
    correct: 1,
    image: "3664A4B4-AB7C-42B1-BD70-09B1C04D6641.jpeg",
    message:
      "We both know Indomie wins. 🙄😂❤️"
  }
];

// ================= STATE =================
let currentIndex = 0;

// ================= SCREENS =================
const screens = {
  loading: document.getElementById("loadingScreen"),
  home: document.getElementById("memoryHome"),
  question: document.getElementById("questionPage"),
  reveal: document.getElementById("memoryReveal"),
  finish: document.getElementById("finishPage")
};

// ================= INIT LOADING =================
window.onload = () => {
  let progress = 0;
  const bar = document.getElementById("loadingProgress");
  const percent = document.getElementById("loadingPercent");

  const load = setInterval(() => {
    progress += 2;
    bar.style.width = progress + "%";
    percent.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(load);
      transition(screens.loading, screens.home);
    }
  }, 20);
};

// ================= TRANSITION SYSTEM =================
function transition(from, to) {
  from.style.opacity = 0;
  setTimeout(() => {
    from.classList.add("hidden");
    to.classList.remove("hidden");
    to.style.opacity = 1;
  }, 300);
}

// ================= OPEN QUESTION =================
document.querySelectorAll(".memorySelect").forEach(btn => {
  btn.addEventListener("click", () => {
    openQuestion(Number(btn.dataset.memory));
  });
});

function openQuestion(index) {
  currentIndex = index;

  transition(screens.home, screens.question);

  const memory = memories[index];

  document.getElementById("questionTitle").textContent = memory.question;

  const container = document.getElementById("optionContainer");
  container.innerHTML = "";

  memory.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt;
    btn.dataset.index = i;

    btn.onclick = () => {
      document.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };

    container.appendChild(btn);
  });
}

// ================= SUBMIT =================
document.getElementById("submitAnswer").addEventListener("click", () => {
  const selected = document.querySelector(".option.selected");

  if (!selected) return shake(document.getElementById("submitAnswer"));

  const index = Number(selected.dataset.index);
  const memory = memories[currentIndex];

  if (index === memory.correct) {
    correctAnswer(memory);
  } else {
    selected.classList.add("wrong");
    setTimeout(() => selected.classList.remove("wrong"), 500);
  }
});

// ================= CORRECT ANSWER =================
function correctAnswer(memory) {
  spawnHearts();

  setTimeout(() => {
    transition(screens.question, screens.reveal);

    const img = document.getElementById("memoryImage");
    const msg = document.getElementById("memoryMessage");

    img.style.display = "block";
    msg.style.display = "block";

    img.src = memory.image;

    typeWriter(msg, memory.message);

    document.getElementById("nextMemory").onclick = nextMemory;
  }, 600);
}

// ================= NEXT =================
function nextMemory() {
  const next = currentIndex + 1;

  if (next < memories.length) {
    openQuestion(next);
  } else {
    transition(screens.reveal, screens.finish);
  }
}

// ================= HEART EFFECT =================
function spawnHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";
    heart.style.fontSize = Math.random() * 18 + 12 + "px";
    heart.style.animation = "floatUp 2s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

// ================= TYPEWRITER =================
function typeWriter(el, text) {
  el.textContent = "";
  let i = 0;

  const type = setInterval(() => {
    el.textContent += text[i];
    i++;

    if (i >= text.length) clearInterval(type);
  }, 25);
}

// ================= SHAKE =================
function shake(el) {
  el.style.transform = "translateX(-5px)";
  setTimeout(() => {
    el.style.transform = "translateX(5px)";
  }, 100);
  setTimeout(() => {
    el.style.transform = "translateX(0)";
  }, 200);
}

// ================= BACK =================
document.getElementById("backHome").onclick = () => {
  transition(screens.question, screens.home);
};

document.getElementById("backQuestion").onclick = () => {
  transition(screens.question, screens.home);
};
