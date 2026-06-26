const reasons = [
`Your dad jokes😭, sometimes they actually make me laugh but I’ll never say this again😭`,

`I love how goofy you are and how you always try to make me do things that'll get rid of my anxiety🥹, even if it involves shouting "I'm a goat" before entering amphi😭`,

`I love how intentional and gentle you are with me❤️`,

`I love how you always try to find a "fix" for every problem I have, even though you know you can't do much sometimes🥹`
];

const envelopes = document.querySelectorAll(".envelope");
const overlay = document.getElementById("letterOverlay");
const letterText = document.getElementById("letterText");
const closeBtn = document.getElementById("closeLetter");
const finishedMessage = document.getElementById("finishedMessage");

let opened = 0;

envelopes.forEach((envelope,index)=>{

    envelope.addEventListener("click",()=>{

        if(envelope.classList.contains("open")) return;

        envelope.classList.add("open");

        overlay.classList.remove("hidden");

        letterText.textContent = reasons[index];

        opened++;

    });

});

closeBtn.addEventListener("click",()=>{

    overlay.classList.add("hidden");

    if(opened===reasons.length){

        finishedMessage.classList.remove("hidden");

    }

});

document.getElementById("goLevel4").addEventListener("click",()=>{

    window.location.href="level4.html";

});
