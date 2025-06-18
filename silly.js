let light_mode = document.querySelector('.light-mode')
let hide_button = document.querySelector(".hide_button")
let hide_button_2 = document.querySelector(".hide_button_2")

light_mode.addEventListener("click", function () {
    light_mode.style.color = "black";
    light_mode.style.background = "white";
})
function changeImage() {
    if (document.getElementById("imgClickAndChange").src = "images/tele-darkmode.png"){
        document.getElementById("imgClickAndChange").src = "images/tele-lightmode.png";
    } else {
        document.getElementById("imgClickAndChange").src = "images/tele-darkmode.png";
    }
}

hide_button.addEventListener('click', function() {
    changeImage();
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    hide_button.style.backgroundColor = "white"
    hide_button_2.style.backgroundColor = "white"
    hide_button.style.color = "black"
    hide_button_2.style.color = "black"
})


hide_button_2.addEventListener('click', function() {
    changeImage();
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    hide_button.style.backgroundColor = "black"
    hide_button_2.style.backgroundColor = "black"
    hide_button.style.color = "white"
    hide_button_2.style.color = "white"
})



