const toogle = document.getElementById('toogle')
const dropItem = document.querySelector(".nav-item")

toogle.addEventListener("click", function(){
    dropItem.classList.toggle("show-links")
})