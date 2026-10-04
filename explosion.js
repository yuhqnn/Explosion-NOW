
const Backbtn = document.getElementById(`backBUTTON`);
const Explodebtn = document.getElementById(`explodeBUTTON`);
const ExplodeAgainbtn = document.getElementById(`explodeAgainBUTTON`);
const explosionCount = document.getElementById(`explosion-count`);
let explodeNum = 1;
localStorage.setItem('explosion Count', explodeNum);
console.log(localStorage.getItem('explosion Count'));

Backbtn.onclick = function () {
    window.location.href = "index.html"
}

ExplodeAgainbtn.onclick = function () {
    explodeNum += 1
    localStorage.setItem('explosion Count', explodeNum)
    console.log(localStorage.getItem('explosion Count'));
    explosionCount.textContent = "explosions: " + explodeNum

}