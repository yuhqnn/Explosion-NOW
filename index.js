
(function () {
    document.getElementById("logo-text").addEventListener("animationend", (event) => {
        console.log("animation ended");
        console.log("animation finished");
    })
})();
LocalNum = sessionStorage.getItem("explosion Count");

const pageKey = 'visted_' + window.location.pathname;
if (sessionStorage.getItem(pageKey)) {
    console.log("user has been here already")
    document.getAnimations().forEach(animation => animation.pause());
    const find_all = document.querySelectorAll('*');
    for (let i = 0; i < find_all.length; i++) {
        find_all[i].style.opacity = 1;
    }
    document.querySelector('#logo-back').style.opacity = 1;
    console.log(find_all);
    console.log(document.getElementById('logo-back').style.opacity);
}
else {
    console.log("user hasn't been here");
    sessionStorage.setItem(pageKey, 'true');
    console.log(sessionStorage.getItem(pageKey));
}

const Explodebtn = document.getElementById(`explodeBUTTON`);
const Somethingbtn = document.getElementById("somethingBUTTON");
const testButtonSession = document.getElementById("test")
const Sillybtn = document.getElementById("sillyBUTTON")
const inforBtn = document.getElementById("infoBUTTON")


Explodebtn.onclick = function () {
    let temp = Number(LocalNum);
    sessionStorage.setItem("explosion Count", temp + 1);
    LocalNum = sessionStorage.getItem("explosion Count");
    window.location.href = "explosion.html"
    
}
Somethingbtn.onclick = function () {
    window.location.href = "later.html"
}
testButtonSession.onclick = function(){
    sessionStorage.clear();
}
Sillybtn.onclick = function(){
    window.location.href = "colon3.html"
}
inforBtn.onclick = function() {
    window.open('https://github.com/yuhqnn/Explosion-NOW');
}