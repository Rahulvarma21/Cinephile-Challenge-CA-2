// creating modal
let start_btn = document.querySelector(".startbtn")
let instructions_box = document.querySelector(".infobox")
let nobutton = document.querySelector("#nobtn")
let gobutton = document.querySelector("#gobtn")
localStorage.clear()
// startbtn

start_btn.onclick = ()=>{
  let Name = name.value; 
  if(Name === ""){
    alert("Enter your name");
  }else{
    instructions_box.classList.add("activeInfo"); 
  }
}//infobox appear

nobutton.onclick = ()=>{
    instructions_box.classList.remove("activeInfo"); 
}//infobox disappears

gobutton.onclick = ()=>{
    window.location.href = "./game.html"
}//infobox disappears

// saving the name
const name = document.getElementById("name");
const submit_btn = document.getElementById("submitbtn");

submit_btn.addEventListener("click", function(){
    let Name = name.value;  
    if (Name === "") {
        alert("Enter your name");
    } else {
        localStorage.setItem("name", Name);
    }
});


// audio controls

var music = document.getElementById("audio");
var playPauseButton = document.getElementById("playPauseButton");
var count = 0;

playPauseButton.addEventListener("click", function() {
  if (count == 0) {
    count = 1;
    music.play();
    playPauseButton.textContent = "off";
  } else {
    count = 0;
    music.pause();
    playPauseButton.textContent = "on";
  }
});