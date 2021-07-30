function clickHandler() {
  var button_name=this.innerHTML;
  makeSound(button_name);
  buttonAnimation(button_name);


  }
var n_button=document.querySelectorAll('.drum').length;
for(var i=0;i<n_button;i++){
  document.querySelectorAll("button")[i].addEventListener("click",clickHandler);
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){

  switch (key) {
    case "w":
      var aud=new Audio("sounds/crash.mp3");
      aud.play();
      break;
    case "a":
      var aud=new Audio("sounds/kick-bass.mp3");
      aud.play();
      break;
    case "s":
      var aud=new Audio("sounds/snare.mp3");
      aud.play();
      break;
    case "d":
      var aud=new Audio("sounds/tom-1.mp3");
      aud.play();
      break;
    case "j":
      var aud=new Audio("sounds/tom-2.mp3");
      aud.play();
      break;
    case "k":
      var aud=new Audio("sounds/tom-3.mp3");
      aud.play();
      break;
    case "l":
      var aud=new Audio("sounds/tom-4.mp3");
      aud.play();
      break;
    default:
      console.log(button_name);
}
}
function buttonAnimation(current_key) {
  var active_button=document.querySelector("."+current_key);
  active_button.classList.add("pressed");
  setTimeout(function () {
    active_button.classList.remove("pressed");
  }, 100);
}
