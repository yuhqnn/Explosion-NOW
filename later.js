const Explodebtn = document.getElementById(`explodeBUTTON`);
const Backbtn = document.getElementById(`backBUTTON`);
const Somethingbtn = document.getElementById(`somethingBUTTON`);
const uploadingDiv = document.getElementById("uploading")
const explosionOverlay = document.getElementById('explosionOverlay')
const inputImgDiv = document.getElementById('inputImgDiv')
let subjectUrl;

const input = document.querySelector('input');
const img = document.getElementById('imgInput');

explosionOverlay.style.top = img.offsetTop
input.style.opacity = 0;

input.addEventListener('change', function() {
    
    subjectUrl = URL.createObjectURL(input.files[0]);
    img.src = subjectUrl;
    console.log(subjectUrl);

    uploadingDiv.style.display = 'none';
    explosionOverlay.style.width = img.width
    const widthgrr = img.getAttribute("width")
    console.log(widthgrr)
    explosionOverlay.style.height = img.height
    
})


Explodebtn.addEventListener('click', function() {
    
    // URL.revokeObjectURL(subjectUrl);
    input.remove(input.files[0]);
    console.log("url revoked");
    img.src = "assets/soot2.png"

    explosionOverlay.src = "assets/explosion-gif.gif"
    explodeImageSwitch();


    uploadingDiv.style.opacity = 1;
    uploadingDiv.style.display = 'auto';
})

Backbtn.onclick = function () {
    window.location.href = "index.html"

}

const explodeImageSwitch = function() {
    explosionOverlay.display = 'block'
    setTimeout(() => {
        fullScreenGif.style.display = "none";
        fullScreenGif.src = "assets/placeholder.jpeg"
    }, 1700);
}
