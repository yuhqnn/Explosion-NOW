const worldBtn = document.getElementById("worldBUTTON");
const popupAlert = document.getElementById("modal_container")
const returnBtn = document.getElementById("return")
const confirmBtn = document.getElementById("confirm")


worldBtn.addEventListener('click', () => {
    popupAlert.classList.add('show');
})
returnBtn.addEventListener('click', () => {
    popupAlert.classList.remove('show');
})