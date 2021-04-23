// alert("Hello there!");
// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick(){
//   alert("I got clicked!");
// }


// document.querySelector("button").addEventListener("click", function (){
//   alert("I got clicked!");
// }
// );


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();

  });
}
