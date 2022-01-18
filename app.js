Array.from(document.getElementsByClassName("btn")).forEach(function(element) {
  element.addEventListener("click", function() {
    playSounds(this.innerText);
    buttonAnimation(this);
  })
})

document.addEventListener("keydown", function(event) {
  playSounds(event.key.toUpperCase());
  buttonAnimation(document.getElementsByClassName(event.key)[0]);
})

function playSounds(btn) {
  switch(btn) {
    case "W":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "A":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "S":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "D":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "J":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "K":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "L":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(btn);
      break;
  }
}

function buttonAnimation(btn) {
  btn.classList.add("btn-pressed");
  setTimeout(function() {
    btn.classList.remove("btn-pressed");
  }, 100);
}
