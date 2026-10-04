(function(){
    document.getElementById("logo-text").addEventListener("animationend", (event) => {
        console.log("animation ended"); 
        console.log("animation finished")
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