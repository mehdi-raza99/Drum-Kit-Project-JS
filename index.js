/*

var w = document.querySelector(".w");
var a = document.querySelector(".a");
var s = document.querySelector(".s");
var d = document.querySelector(".d");
var j = document.querySelector(".j");
var k = document.querySelector(".k");
var l = document.querySelector(".l");

w.addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
});

a.addEventListener("click", function() {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
});

s.addEventListener("click", function() {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
});

d.addEventListener("click", function() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
});
j.addEventListener("click", function() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
});
k.addEventListener("click", function() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
});
l.addEventListener("click", function() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
});

*/

var buttons=document.querySelectorAll("button");
var key;
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function () {
    key=this.innerHTML;  
    makeSound(key); 
    buttonAnimation(key)    
    })
}
function makeSound(key)
{
    switch (key){
    case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
      
    case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
      
    case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
      
    case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
      
    case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
      
    case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
    default:
            console.log(key);
}
}

function buttonAnimation(key)
{
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
      }, 100);
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  

    console.log("Event type:", event.type); // Output the type of the event
    console.log("Clicked element:", event.target); // Output the element that triggered the event
    console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY); // Output mouse coordinates
  });
