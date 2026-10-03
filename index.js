(function(){
    document.getElementById("logo-text").addEventListener("animationend", (event) => {
        console.log("animation ended"); 
        document.getElementById("logo-text").style.opacity = 1;
        document.getElementById(`explodeBUTTON`).style.opacity = 1;
        document.getElementById(`laterBUTTON`).style.opacity = 1;
        document.getElementById(`gif`).style.opacity = 1;
        document.querySelector('.text').style.opacity = 1;
    })
})();

const Explodebtn = document.getElementById(`explodeBUTTON`);
const Laterbtn = document.getElementById("laterBUTTON");

Explodebtn.onclick = function(){
    window.location.href="explosion.html"
}
Laterbtn.onclick = function(){
    window.location.href="later.html"
}