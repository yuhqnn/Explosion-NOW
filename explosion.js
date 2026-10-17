const Backbtn = document.getElementById(`backBUTTON`);
const ExplodeAgainbtn = document.getElementById(`explodeAgainBUTTON`);
const testButtonLocal = document.getElementById(`TestButton`);
const explosionCountText = document.getElementById(`explosion-count`);
const globalExplosionCount = document.getElementById(`global-count`);
let LocalNum = sessionStorage.getItem('explosion Count');
const fullScreenGif = document.getElementById(`full-screen-Explosion`)
const gif = false;
const sound = new Audio(src = "assets/explosion-sound2.mp3")
const allowSouond = true;

console.log(LocalNum);
sound.play();



if (fullScreenGif.checkVisibility = true) {
    setTimeout(() => {
        fullScreenGif.style.display = "none";
        fullScreenGif.src = "assets/placeholder.jpeg"
    }, 2550);
}

fullScreenGif.src = fullScreenGif.src

if (sessionStorage.getItem('explosion Count') == null) {
    console.log("new session");
    sessionStorage.setItem('explosion Count', 1);
    explosionCountText.textContent = "you have exploded 1 time."
    LocalNum = sessionStorage.getItem('explosion Count');
    console.log(LocalNum);
}
else {
    explosionCountText.textContent = "you have exploded " + LocalNum + " times."
}

ExplodeAgainbtn.addEventListener("click", () => {
    fullScreenGif.src = "assets/explosion-gif-2.gif"
    screenExplosionSwitch();
    let temp = Number(LocalNum)
    
    sessionStorage.setItem('explosion Count', temp + 1);
    LocalNum = sessionStorage.getItem('explosion Count');
    explosionCountText.textContent = "you have exploded " + LocalNum + " times."
   
    console.log("localNum: " + LocalNum + " Temp: " + temp);
    sound.duration= 2550;
    sound.play();
})

Backbtn.onclick = function () {
    window.location.href = "index.html"
    console.log("meowmeo")
}

testButtonLocal.onclick = function () {
    sessionStorage.clear();
    console.log("Local storage cleared: " + sessionStorage)
}



const screenExplosionSwitch = function () {
    fullScreenGif.style.display = "block";
    setTimeout(() => {

        fullScreenGif.style.display = "none";
        fullScreenGif.src = "assets/placeholder.jpeg"
    }, 2550);
}


