(function(){
    document.getElementById("logo-text").addEventListener("animationend", (event) => {
        console.log("animation ended"); 
        document.getElementById("logo-text").style.opacity = 1;
    })
})();

const Explodebtn = document.getElementById(`explodeBUTTON`);

Explodebtn.onclick = function(){
    window.location.href="explosion.html"
}