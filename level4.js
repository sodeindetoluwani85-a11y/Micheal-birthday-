document.addEventListener("DOMContentLoaded",()=>{

const introPage=document.getElementById("introPage");
const certificatePage=document.getElementById("certificatePage");
const certificate=document.getElementById("certificate");

const revealBtn=document.getElementById("revealAward");
const nextBtn=document.getElementById("nextLevel");

const confettiContainer=document.getElementById("confettiContainer");

revealBtn.addEventListener("click",()=>{

introPage.classList.add("hidden");

certificatePage.classList.remove("hidden");

requestAnimationFrame(() => {

    certificate.classList.add("show");

    launchConfetti();

    addSparkles();

});

});

nextBtn.addEventListener("click",()=>{

window.location.href="level5.html";

});

function launchConfetti(){

const emojis=["🎉","🎊","✨","💖","❤️","🌸"];

for(let i=0;i<70;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

piece.style.left=Math.random()*100+"vw";

piece.style.animationDelay=Math.random()*1+"s";

piece.style.fontSize=(18+Math.random()*16)+"px";

confettiContainer.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}

function addSparkles(){

const sparkles=["✨","⭐","💛"];

for(let i=0;i<10;i++){

const star=document.createElement("div");

star.className="sparkle";

star.innerHTML=sparkles[Math.floor(Math.random()*sparkles.length)];

star.style.left=(20+Math.random()*60)+"%";

star.style.top=(15+Math.random()*60)+"%";

certificatePage.appendChild(star);

}

}

});
