const worldBtn = document.getElementById("worldBUTTON");
const modalContainerClass = document.getElementById("modal-container");
const returnBtn = document.getElementById("return");
const confirmBtn = document.getElementById("confirm");
const backBtn = document.getElementById("backBUTTON");
const test = document.getElementById;
const bodyElement = document.body;

worldBtn.addEventListener('click', () => {
    modalContainerClass.style.display = "flex";
    
})
returnBtn.addEventListener('click', () => {
    modalContainerClass.style.display = "none";
})

confirmBtn.addEventListener('click', () => {
    returnBtn.animate({ opacity: [1, 0] },{duration: 1000, fill: "forwards",},)
    backBtn.animate({ opacity: [1, 0] },{duration: 1000, fill: "forwards",},)
    setTimeout(() => {
        modalContainerClass.animate({ opacity: [1, 0] },{duration: 1000, fill: "forwards",},)
    }, 2000);
    setTimeout(() => {
        bodyElement.animate({ opacity: [1, 0] },{duration: 1000, fill: "forwards",},)
        setTimeout(() => {
            bodyElement.animate({ backgroundColor: "#000"},{duration: 2000, fill: "forwards",},)
            document.body.style.backgroundImage.animate({ opacity: [1, 0] },{duration: 1000, fill: "forwards",},)
        }, 500);
        
    }, 2000);
    setTimeout(() => {
        // window.alert("error.. error...... error... 01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01101100 01101111 01100111 01100001 01100010 01100101 00101110 01101001 01110100 01100011 01101000 00101110 01101001 01101111 00101111 01110011 01110000 01100001 01100011 01100101 00101101 01100110 01101001 01110011 01101000 00101101 01100110 01101001 01110011 01101000 01101001 01101110 01100111")
        sessionStorage.setItem('gih', 'true')
        sessionStorage.setItem('visited', 'false')
        console.log(sessionStorage.getItem('gih'))
        //window.location.href = "index.html"
    }, 5000);
    
    
    
});
backBtn.onclick = function() {
    window.location.href = "index.html"
}
