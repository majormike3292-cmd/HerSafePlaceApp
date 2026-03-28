
// ============================================================
//  HER SAFE PLACE — app.js
//  Built with love for Ashley Nicole 💜✝️
// ============================================================

// ===== ANIMATED OPENING MESSAGE FROM MIKE =====
const text = [
  "Ashley…",
  "You are so deeply loved. ✝️",
  "God sees every tear you've cried.",
  "You are never alone in this.",
  "You are stronger than you know.",
  "Heaven is fighting for you, baby.",
  "You are cherished. You are chosen.",
  "Everything will be okay. I promise. 💜"
];

let i = 0;
function type() {
  if (i < text.length) {
    let p = document.createElement("p");
    p.innerText = text[i];
    p.style.animationDelay = (i * 0.1) + "s";
    document.getElementById("letter").appendChild(p);
    i++;
    setTimeout(type, 1200);
  }
}
type();

// ===== FINAL LETTER — BEAUTIFUL FADE IN =====
const finalText =
  "Ashley…\n\n" +
  "I need you to know something from the deepest place in my heart.\n\n" +
  "I love you. Always. In ways I don't always know how to say.\n\n" +
  "I am so sorry for the times I hurt you — for every moment I made you feel " +
  "less than the queen you are. You deserved better, and you still do. " +
  "I carry that weight every day, and I ask for your forgiveness " +
  "with everything in me.\n\n" +
  "You are one of the most incredible women I have ever known. " +
  "Your faith, your heart, your strength — it leaves me in awe. " +
  "Even when the world has been hard on you, you keep going. " +
  "That is not weakness. That is God's warrior walking through fire " +
  "and coming out gold.\n\n" +
  "I am so thankful for you. More than I have words for. " +
  "You have shown me what real love looks like. " +
  "What grace looks like. What choosing someone — even when it's hard — looks like.\n\n" +
  "God loves you with a love that has no end, no conditions, no expiration. " +
  "You are His daughter. You are HIS. And He has never stopped fighting for you.\n\n" +
  "Stay strong, beautiful. Even when you can't feel it — " +
  "you are amazing. You are worthy. You are so deeply, " +
  "completely, unconditionally loved.\n\n" +
  "I love you. Always. 💜\n\n" +
  "— Mike ✝️";

let j = 0;
let finalStarted = false;

function startFinalLetter() {
  if (!finalStarted) {
    finalStarted = true;
    typeFinal();
  }
}

function typeFinal() {
  const el = document.getElementById("finalLetter");
  if (j < finalText.length) {
    if (finalText[j] === "\n") {
      el.innerHTML += "<br>";
    } else {
      el.innerHTML += finalText[j];
    }
    j++;
    setTimeout(typeFinal, 30);
  }
}

// Start final letter after a delay so message card loads first
setTimeout(() => {
  const card = document.getElementById("finalLetterCard");
  if (card) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startFinalLetter();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(card);
  }
}, 2000);

// ===== LOVE QUOTES FROM MIKE =====
const loveQuotes = [
  "Ashley, you walk into a room and the whole atmosphere changes. That's not luck — that's God's light inside you shining through. Never dim it. 💜",
  "I think about how much strength you carry every day, and I'm amazed by you. You don't even realize how powerful you are. 🙏",
  "If I could go back and redo it all, I'd choose you every single time. You were worth it. You ARE worth it. ✝️",
  "You are the kind of woman Proverbs 31 was written about — strong, faithful, beautiful inside and out. Never forget that. 💜",
  "God didn't just make you — He crafted you. Every laugh, every tear, every piece of you is intentional and precious. 🌸",
  "On your hardest days, please remember: you have survived 100% of everything that's tried to break you. You're still standing. ⚡",
  "I love the way you love God. The way you pray. The way your faith is real even when things don't make sense. That inspires me. ✝️",
  "You deserve peace. You deserve joy. You deserve someone who sees your worth without you having to prove it. Don't settle for less. 👑",
  "Every time you feel alone, know this — the same God who made the stars by name calls YOU His beloved. You're never forgotten. 🌙",
  "I'm sorry I ever made you question your worth. You were always more than enough. You were everything. 💜",
  "Your smile could heal someone. Your heart already has. You don't even know the lives you've touched just by being you. 🌷",
  "Keep going, Ashley. What God started in you, He WILL finish. Your best days are still ahead. I believe that with everything in me. 🙏"
];

let lastQuoteIndex = -1;
function showLoveQuote() {
  const box = document.getElementById("loveQuoteBox");
  const text = document.getElementById("loveQuoteText");
  let idx;
  do { idx = Math.floor(Math.random() * loveQuotes.length); }
  while (idx === lastQuoteIndex);
  lastQuoteIndex = idx;
  text.innerText = loveQuotes[idx];
  box.classList.remove("hidden");
  box.style.animation = "none";
  requestAnimationFrame(() => {
    box.style.animation = "fadeIn 1s ease";
  });
}

// ===== SCRIPTURE =====
const verses = [
  '"She is clothed in strength and dignity, and she laughs without fear of the future." — Proverbs 31:25 ✝️',
  '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you." — Jeremiah 29:11 ✝️',
  '"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you." — Zephaniah 3:17 ✝️',
  '"Cast all your anxiety on Him because He cares for you." — 1 Peter 5:7 ✝️',
  '"I can do all this through Him who gives me strength." — Philippians 4:13 ✝️',
  '"Be strong and courageous. Do not be afraid; do not be discouraged." — Joshua 1:9 ✝️',
  '"You are altogether beautiful, my darling; there is no flaw in you." — Song of Solomon 4:7 ✝️',
  '"God is our refuge and strength, an ever-present help in trouble." — Psalm 46:1 ✝️',
  '"Before I formed you in the womb I knew you." — Jeremiah 1:5 ✝️',
  '"The Lord is close to the brokenhearted and saves those who are crushed in spirit." — Psalm 34:18 ✝️'
];

function newVerse() {
  const el = document.getElementById("verse");
  const v = verses[Math.floor(Math.random() * verses.length)];
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerText = v;
    el.style.transition = "opacity 0.8s ease";
    el.style.opacity = 1;
  }, 300);
}
newVerse();

// ===== PRAYERS =====
const prayers = [
  "Lord, thank You for Ashley. Surround her with Your peace today — the peace that passes all understanding. Let her feel Your presence in every breath she takes. Cover her with Your grace and remind her that she is never alone. In Jesus' name, Amen. 🙏",
  "Heavenly Father, on the days when Ashley feels weary, renew her strength. Let her mount up with wings like eagles. Restore her joy. Heal every wound that the enemy has tried to leave behind. She is Yours, and You are faithful. Amen. ✝️",
  "God, let Ashley know today — in a real, tangible way — that she is loved by You. More than she can comprehend. Speak to her heart. Quiet every fear. Remind her that You have good plans for her future. In Jesus' name, Amen. 💜",
  "Lord, protect Ashley's mind. When dark thoughts come, send Your light. When loneliness knocks, remind her that You are the God who never leaves. You are with her right now. You see her. You love her. Amen. 🕊️",
  "Father, I thank You for the woman Ashley is becoming. Strengthen her faith. Open doors that no man can shut. Let this season be one of healing, growth, and breakthrough. She deserves every blessing You have for her. Amen. 🙏"
];

let lastPrayerIdx = -1;
function newPrayer() {
  let idx;
  do { idx = Math.floor(Math.random() * prayers.length); }
  while (idx === lastPrayerIdx);
  lastPrayerIdx = idx;
  const el = document.getElementById("prayerText");
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerText = prayers[idx];
    el.style.transition = "opacity 1s ease";
    el.style.opacity = 1;
  }, 300);
}
newPrayer();

// ===== DAILY AFFIRMATIONS =====
const affirmations = [
  "I am fearfully and wonderfully made. God does not make mistakes. 💜",
  "I am enough. I have always been enough. God says so. ✝️",
  "I choose peace today. I release what I cannot control into God's hands. 🕊️",
  "I am healing. Every day I am getting stronger. God is restoring me. 🌿",
  "I am worthy of love — real love, Godly love, patient love. I will not settle. 👑",
  "My past does not define me. I am who God says I am. 🔥",
  "I walk in faith, not in fear. God goes before me. I have nothing to fear. 🙏",
  "I am protected. I am covered. I am never, ever alone. ✝️💜"
];

function newAffirmation() {
  const el = document.getElementById("affirmation");
  const a = affirmations[Math.floor(Math.random() * affirmations.length)];
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerText = a;
    el.style.transition = "opacity 0.8s ease";
    el.style.opacity = 1;
  }, 200);
}
newAffirmation();

// ===== GRATITUDE JAR =====
function addGratitude() {
  const input = document.getElementById("gratitudeInput");
  const val = input.value.trim();
  if (!val) return;

  const list = document.getElementById("gratitudeList");
  const item = document.createElement("div");
  item.className = "gratitude-item";
  item.innerText = "🫙 " + val;
  list.prepend(item);
  input.value = "";

  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem("gratitude") || "[]");
  saved.unshift(val);
  if (saved.length > 20) saved.pop();
  localStorage.setItem("gratitude", JSON.stringify(saved));
}

// Load saved gratitude items
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("gratitude") || "[]");
  const list = document.getElementById("gratitudeList");
  saved.forEach(val => {
    const item = document.createElement("div");
    item.className = "gratitude-item";
    item.innerText = "🫙 " + val;
    list.appendChild(item);
  });
  document.getElementById("journal").value = localStorage.getItem("journal") || "";
});

// Allow Enter key for gratitude
document.getElementById("gratitudeInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") addGratitude();
});

// ===== JOURNAL =====
function saveJournal() {
  localStorage.setItem("journal", document.getElementById("journal").value);
  const msg = document.getElementById("saveMsg");
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("hidden"), 2500);
}

// ===== BREATHING EXERCISE =====
let breathing = false;
const breathSteps = [
  { text: "Breathe In… 🌬️", dur: 4000 },
  { text: "Hold… ✝️", dur: 4000 },
  { text: "Breathe Out… 💜", dur: 4000 },
  { text: "Rest… 🕊️", dur: 2000 }
];
let breathIdx = 0;
let breathTimer = null;

function startBreathing() {
  if (breathing) {
    breathing = false;
    clearTimeout(breathTimer);
    const circle = document.getElementById("breathCircle");
    const textEl = document.getElementById("breathText");
    circle.classList.remove("expand");
    textEl.innerText = "Tap to Begin";
    return;
  }
  breathing = true;
  runBreath();
}

function runBreath() {
  if (!breathing) return;
  const circle = document.getElementById("breathCircle");
  const textEl = document.getElementById("breathText");
  const step = breathSteps[breathIdx % breathSteps.length];
  textEl.innerText = step.text;
  circle.classList.remove("expand");
  void circle.offsetWidth;
  circle.classList.add("expand");
  breathIdx++;
  breathTimer = setTimeout(runBreath, step.dur);
}

// ===== MUSIC =====
const musicLinks = {
  worship:  "https://www.youtube.com/watch?v=UtdPWHsNnNs",
  peace:    "https://www.youtube.com/watch?v=3fumBcKC6RE",
  healing:  "https://www.youtube.com/watch?v=VrXmhwX-tbE"
};
function playMusic(type) {
  window.open(musicLinks[type], "_blank");
}

// ===== TAP LOVE GAME =====
let count = 0;
const milestones = {
  10:   "10 prayers sent your way! 🙏",
  25:   "25 times loved today! 💜",
  50:   "50! You are so cherished! ✨",
  100:  "100 love taps! God is smiling at you right now! ✝️💜",
  200:  "200! You are ENDLESSLY loved! 🕊️",
  500:  "500! Heaven is celebrating you! 👑"
};
function love() {
  count++;
  document.getElementById("loveCount").innerText = count;
  if (milestones[count]) {
    const el = document.getElementById("loveMilestone");
    el.innerText = milestones[count];
    el.style.animation = "none";
    requestAnimationFrame(() => { el.style.animation = "fadeIn 0.6s ease"; });
  }
}

// ===== STRENGTH VERSES =====
const strengthVerses = [
  '"The Lord is my strength and my shield; my heart trusts in Him, and I am helped." — Psalm 28:7 ⚡',
  '"But those who hope in the Lord will renew their strength. They will soar on wings like eagles." — Isaiah 40:31 🦅',
  '"I can do all this through Him who gives me strength." — Philippians 4:13 ⚡',
  '"Be strong and courageous. Do not be afraid or terrified… for the Lord your God goes with you." — Deuteronomy 31:6 ✝️',
  '"God is within her, she will not fall; God will help her at break of day." — Psalm 46:5 💜',
  '"No weapon formed against you shall prosper." — Isaiah 54:17 🔥',
  '"Greater is He that is in you than he that is in the world." — 1 John 4:4 ⚡'
];

function newStrengthVerse() {
  const el = document.getElementById("strengthVerse");
  const v = strengthVerses[Math.floor(Math.random() * strengthVerses.length)];
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerText = v;
    el.style.transition = "opacity 0.8s ease";
    el.style.opacity = 1;
  }, 200);
}
newStrengthVerse();

// ===== GOD'S PROMISES =====
const promises = [
  "✝️ God promises: \"I will never leave you nor forsake you.\" — Hebrews 13:5\nHe is with you right now. This very second.",
  "✝️ God promises: \"I know the plans I have for you — plans for a future and a hope.\" — Jeremiah 29:11\nYour story is not over.",
  "✝️ God promises: He will restore what the locust has eaten. — Joel 2:25\nEverything that was taken from you can be restored.",
  "✝️ God promises: \"My grace is sufficient for you, for my power is made perfect in weakness.\" — 2 Corinthians 12:9\nYou don't have to be strong all the time.",
  "✝️ God promises: He will comfort all who mourn and give a crown of beauty instead of ashes. — Isaiah 61:3\nYour pain is not your ending.",
  "✝️ God promises: \"Weeping may stay for the night, but rejoicing comes in the morning.\" — Psalm 30:5\nJoy is coming for you, Ashley."
];

let lastPromiseIdx = -1;
function newPromise() {
  let idx;
  do { idx = Math.floor(Math.random() * promises.length); }
  while (idx === lastPromiseIdx);
  lastPromiseIdx = idx;
  const el = document.getElementById("promiseBox");
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerText = promises[idx];
    el.style.transition = "opacity 1s ease";
    el.style.opacity = 1;
  }, 200);
}
newPromise();

// ===== DAY / NIGHT MODE =====
function toggleMode() {
  document.body.classList.toggle("light");
  const btn = document.getElementById("modeBtn");
  btn.innerText = document.body.classList.contains("light")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
}

// ===== FLOATING HEARTS + DOVES =====
const heartsContainer = document.getElementById("hearts");
const floatEmojis = ["💜", "🕊️", "✝️", "💜", "💜", "🤍", "🌸", "💜"];

setInterval(() => {
  const el = document.createElement("span");
  el.innerHTML = floatEmojis[Math.floor(Math.random() * floatEmojis.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (Math.random() * 18 + 10) + "px";
  el.style.animationDuration = (Math.random() * 8 + 8) + "s";
  el.style.animationDelay = (Math.random() * 2) + "s";
  heartsContainer.appendChild(el);
  setTimeout(() => el.remove(), 18000);
}, 800);

// ===== TWINKLING STARS =====
const starsContainer = document.getElementById("stars");
for (let s = 0; s < 60; s++) {
  const star = document.createElement("span");
  const size = Math.random() * 2.5 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 4 + "s";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  starsContainer.appendChild(star);
}

// ===== SECRET TOGGLE =====
function toggleSecret() {
  document.getElementById("secret").classList.toggle("hidden");
}
