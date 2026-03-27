
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
  
// FLOATING HEARTS
const heartsContainer = document.getElementById("hearts");

setInterval(()=>{
let heart = document.createElement("span");
heart.innerHTML = "💜";
heart.style.left = Math.random()*100 + "vw";
heart.style.fontSize = (Math.random()*20+10) + "px";
heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

},500);
