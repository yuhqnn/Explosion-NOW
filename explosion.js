(function(){
    
        document.getElementById(`explodeBUTTON`).style.opacity = 1;
        document.getElementById(`laterBUTTON`).style.opacity = 1;
        document.getElementById(`backBUTTON`).style.opacity= 1;
    })();

const Backbtn = document.getElementById(`backBUTTON`);

Backbtn.onclick = function(){
    console.log("ciclks")
    window.location.href="index.html"
}
const Explodebtn = document.getElementById(`explodeBUTTON`);
Explodebtn.onclick = function(){
    window.location.href="explosion.html"
}