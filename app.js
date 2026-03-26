
// MESSAGE TYPE
const text = [
  "Ashley…",
  "You are loved deeply.",
  "God sees your heart.",
  "You are not alone.",
  "I prayed for your peace."
];

let i = 0;
function type() {
  if (i < text.length) {
    let p = document.createElement("p");
    p.innerText = text[i];
    document.getElementById("letter").appendChild(p);
    i++;
    setTimeout(type, 1200);
  }
}
type();

// VERSES
const verses = [
  "Jeremiah 29:11 — God has a plan.",
  "Psalm 34:18 — God is near.",
  "Isaiah 41:10 — Do not fear."
];

function newVerse(){
document.getElementById("verse").innerText =
verses[Math.floor(Math.random()*verses.length)];
}
newVerse();

// PRAYER
function pray(){
document.getElementById("prayer").innerText =
"Lord, bring Ashley peace, strength, and healing. Amen.";
}

// SECRET
function toggleSecret(){
document.getElementById("secret").classList.toggle("hidden");
}

// MUSIC
function playMusic(){
window.open("https://www.youtube.com/watch?v=3fumBcKC6RE");
}
