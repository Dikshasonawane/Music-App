// var ply = document.querySelector(".btn-pl");
var ado = document.querySelector(".Audio");

var ado1 = document.querySelector(".Audio1");

var ado2 = document.querySelector(".Audio2");

var images = document.querySelector("#imgs");
var title = document.querySelector(".m");
var name1 = document.querySelector(".s");

function playAudio(){
    ado.play();
    images.src = "5.jpg";
    title.innerHTML = "Maroon5";
    name1.innerHTML = "Memories";
    
}
function playAudio1(){
    ado1.play();
    images.src = "ymy.jpg";
    title.innerHTML = "Justine";
    name1.innerHTML = "Yummy";

} 
function playAudio2(){
    ado2.play();
    images.src = "0.jpg";
    title.innerHTML = "Justine";
    name1.innerHTML = "Friend";


}
function audiopause(){
    ado.pause();
    ado1.pause();
    ado2.pause();
}
 
// ply.addEventListener("playAudio()",song)
