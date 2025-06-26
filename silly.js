let light_mode = document.querySelector('.light-mode');
let hide_button = document.querySelector(".hide_button");
let hide_button_2 = document.querySelector(".hide_button_2");
let content = document.querySelector(".content");
let button = document.querySelector(".idek");
let button2 = document.querySelector(".idek-2");
let button3 = document.querySelector(".idek-3");
let button4 = document.querySelector(".idek-4");
let links = document.querySelector(".links");
let link = document.querySelector(".links-2");
let darkmode = true


light_mode.addEventListener("click", function () {
    light_mode.style.color = "black";
    light_mode.style.background = "white";
})
function changeImage() {
    if (darkmode){
        document.getElementById("imgClickAndChange").src = "images/tele-lightmode-2.png";
        darkmode = false
    } else {
        darkmode = true
        document.getElementById("imgClickAndChange").src = "images/tele-darkmode-2.png";
    }
}

hide_button.addEventListener('click', function() {
    changeImage();
    document.body.style.backgroundColor = "seashell"
    document.body.style.color = "black"
    hide_button.style.backgroundColor = "burlywood"
    hide_button_2.style.backgroundColor = "burlywood"
    hide_button.style.color = "black"
    hide_button_2.style.color = "black"
    content.style.backgroundColor = "white"
    content.style.color = "black"
})


hide_button_2.addEventListener('click', function() {
    changeImage();
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    hide_button.style.backgroundColor = "black"
    hide_button_2.style.backgroundColor = "black"
    hide_button.style.color = "white"
    hide_button_2.style.color = "white"
    content.style.backgroundColor = "black"
    content.style.color = "white"
})

hide_button.addEventListener('click', function(){
    links.style.color = "black"
    link.style.color = "black"
    button.style.backgroundColor = "rgb(52, 44, 31)"
    button.style.color = "rgb(209, 209, 209)"
    button2.style.backgroundColor = "rgb(52, 44, 31)"
    button2.style.color = "rgb(209, 209, 209)"
    button3.style.backgroundColor = "rgb(52, 44, 31)"
    button3.style.color = "rgb(209, 209, 209)"
    button4.style.backgroundColor = "rgb(52, 44, 31)"
    button4.style.color = "rgb(209, 209, 209)"
})

hide_button_2.addEventListener('click', function(){
    links.style.color = "white"
    link.style.color = "white"
    button.style.backgroundColor = "rgb(112, 50, 146)"
    button.style.color = "rgb(209, 209, 209)"
    button2.style.backgroundColor = "rgb(112, 50, 146)"
    button2.style.color = "rgb(209, 209, 209)"
    button3.style.backgroundColor = "rgb(112, 50, 146)"
    button3.style.color = "rgb(209, 209, 209)"
    button4.style.backgroundColor = "rgb(112, 50, 146)"
    button4.style.color = "rgb(209, 209, 209)"
})

document.addEventListener('click', function(event){
  // grabs the user's mouse position any time there's a click on the window.
  // look in the console for the x and y positions to debug
  console.log("Mouse x pos: "+ event.clientX)
  console.log("Mouse y pos: "+ event.clientY)
})


/*document.querySelector(".direct-2").addEventListener('click', function(event){
    console.log("clicked");
})*/

/*function scrollFunction() {
    const element = document.getElementById("cont");
    element.scrollIntoView({behavior: 'smooth'})
}*/