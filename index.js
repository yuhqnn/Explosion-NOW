const Explodebtn = document.getElementById(`explodeBUTTON`)
const Somethingbtn = document.getElementById("somethingBUTTON")
const testButtonSession = document.getElementById("test")
const Sillybtn = document.getElementById("sillyBUTTON")
const inforBtn = document.getElementById("infoBUTTON")
const fadeInGif = document.getElementById('gifing')

if (sessionStorage.getItem('visited') == 'true') {
    console.log("user has been here already")
    document.getAnimations().forEach(animation => animation.cancel());
    const find_all = document.querySelectorAll('*');
    for (let i = 0; i < find_all.length; i++) {
        find_all[i].style.opacity = 1;
    }
} else {
    console.log("user hasn't been here")
    sessionStorage.setItem('visited', 'true')
}

LocalNum = sessionStorage.getItem("explosion Count");
Explodebtn.onclick = function () {
    let temp = Number(LocalNum);
    sessionStorage.setItem("explosion Count", temp + 1);
    LocalNum = sessionStorage.getItem("explosion Count");
    window.location.href = "explosion.html"

}

if (sessionStorage.getItem('gih') == true) {
    console.log(sessionStorage.getItem('gih'))
    fadeInGif.title = 'fih... catfih'
    fadeInGif.src = 'assets/catfih.webp'
    
}

// Somethingbtn.onclick = function () {
//     window.location.href = "later.html"
// }
Sillybtn.onclick = function () {
    window.location.href = "colon3.html"
}

